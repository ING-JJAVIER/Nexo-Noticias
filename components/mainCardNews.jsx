import React, { useEffect, useState } from 'react';
import CardNews from './cardNews';
import { apiCont } from '@/app/api/apiCont';
import { apiCar } from '@/app/api/apiCar';
import { Spinner } from '@nextui-org/react';

export default function MainCardNews({ language }) {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rs, setRs] = useState([]); // Asegúrate de usar esta variable

  const CACHE_EXPIRATION_TIME = 3600000;

  const fetchSources = async () => {
    try {
      setLoading(true);

      const cacheKey = `sources_${language}`;
      const cachedData = JSON.parse(localStorage.getItem(cacheKey));

      if (cachedData && Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME) {
        setSources(cachedData.data);
        setRs(cachedData.data);  // Aquí estamos configurando rs con los datos de caché
        setLoading(false);
        return;
      }

      const allSources = await apiCont(1, 10, { language });
      const allArticles = await apiCar(1, 10, { language });

      const combinedData = allSources.map((source) => {
        const matchingArticle = allArticles.find((article) => article.url === source.url);

        // Si se encuentra un artículo correspondiente, agregar la imagen
        if (matchingArticle) {
          return {
            ...source,
            image: matchingArticle.urlToImage || null,
          };
        } else {
          // Si no hay artículo, devolver el source tal cual, pero sin imagen
          return {
            ...source,
            image: null, // Asigna null si no hay imagen
          };
        }
      });

      setRs(combinedData);  // Aquí es donde actualizas `rs` con los datos combinados

      if (allSources && allSources.length > 0) {
        setSources(allSources);
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data: allSources, timestamp: Date.now() })
        );
      } else {
        setSources([]);
      }
    } catch (error) {
      console.error('Error fetching sources:', error);
      setSources([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSources();
  }, [language]);

  return (
    <div className="m-4">
      <h2 className="font-semibold mt-8 text-2xl">Las fuentes más importantes</h2>
      {
        loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner size="lg" />
          </div>
        ) : rs.length > 0 ? (  // Aquí estamos usando `rs` en lugar de `sources`
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rs.map((source) => (  // Aquí también se usa `rs`
              <div key={source.id} className="flex justify-center items-center flex-wrap m-4">
                <CardNews
                  image={source.image}  // Ahora pasas la imagen correcta
                  name={source.name}
                  des={source.description}
                  url={source.url}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-4 text-gray-600">
            <p>No se encontraron fuentes para este país/categoria.</p>
          </div>
        )
      }
    </div>
  );
}
