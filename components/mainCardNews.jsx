import React, { useEffect, useState } from 'react';
import CardNews from './cardNews';
import { apiCont } from '@/app/api/apiCont';
import { apiCar } from '@/app/api/apiCar';
import { Spinner } from '@nextui-org/react';

export default function MainCardNews({ language, searchQuery }) {
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rs, setRs] = useState([]);

  const CACHE_EXPIRATION_TIME = 3600000;

  const fetchSources = async () => {
    try {
      setLoading(true);

      const cacheKey = `sources_${language}`;
      const cachedData = JSON.parse(localStorage.getItem(cacheKey));

      if (cachedData && Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME) {
        setSources(cachedData.data);
        setRs(cachedData.data);  
        setLoading(false);
        return;
      }

      const allSources = await apiCont(1, 10, { language });
      const allArticles = await apiCar(1, 10, { language });

      const combinedData = allSources.map((source) => {
        const matchingArticle = allArticles.find((article) => article.url === source.url);
        
        if (matchingArticle) {
          return {
            ...source,
            image: matchingArticle.urlToImage || null,
          };
        } else {
          return {
            ...source,
            image: null, 
          };
        }
      });

      setSources(combinedData);  

      const filteredData = combinedData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setRs(filteredData);

      if (allSources && allSources.length > 0) {
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
  }, [language, searchQuery]); 

  return (
    <div className="m-4">
      <h2 className="font-semibold mt-8 text-2xl">Las fuentes más importantes</h2>
      {
        loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner size="lg" />
          </div>
        ) : rs.length > 0 ? ( 
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rs.map((source) => (  
              <div key={source.id} className="flex justify-center items-center flex-wrap m-4">
                <CardNews
                  image={source.image} 
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
