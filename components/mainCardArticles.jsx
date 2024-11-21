import React, { useEffect, useState } from 'react';
import CardArticles from '@/components/cardArticles'
import { apiCar } from '@/app/api/apiCar';
import { Spinner } from '@nextui-org/react';

export default function MainCardNews({ language }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const CACHE_EXPIRATION_TIME = 3600000;

  const fetchNews = async () => {
    try {
      setLoading(true);

      const cacheKey = `news_${language}`;
      const cachedData = JSON.parse(localStorage.getItem(cacheKey));

      if (cachedData && Date.now() - cachedData.timestamp < CACHE_EXPIRATION_TIME) {
        setNews(cachedData.data);
        setLoading(false);
        return;
      }

      const allNews = await apiCar(1, 10, { language });

      if (allNews && allNews.length > 0) {
        setNews(allNews);

        localStorage.setItem(
          cacheKey,
          JSON.stringify({ data: allNews, timestamp: Date.now() })
        );
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error('Error fetching sources:', error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [language]);

  return (
    <div className="m-4">
      <h2 className="font-semibold mt-8 text-2xl">Lo que sucede en el mundo</h2>
      {
        loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner size="lg" />
          </div>
        ) : news.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {
              news.map((i, index) => (
                <div key={index} className="flex justify-center items-center flex-wrap m-4">
                  <CardArticles
                    name={i.title}
                    des={i.description}
                    url={i.url}
                    urlToImage={i.urlToImage}
                    author={i.author}
                  />
                </div>

              ))
            }
          </div>
        ) : (
          <div className="text-center mt-4 text-gray-600">
            <p>No se encontraron articulos para este país/categoria.</p>
          </div>
        )
      }
    </div>
  );
}
