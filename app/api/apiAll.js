import { apiKey } from '../apiKey/apiKey';

/**
 * Función genérica para consumir con soporte de paginación limitada a 10 páginas.
 * @param {number} page - Número de página (por defecto es 1).
 * @param {number} pageSize - Cantidad de resultados por página (por defecto es 10).
 * @param {Object} params - Objeto con parámetros adicionales para la consulta.
 * @returns {Array} Lista de artículos obtenidos desde la API.
 */

export async function apiAll(page = 1, pageSize = 10, params = {}) {
  try {
    const baseUrl = 'https://newsapi.org/v2/everything'; 

    const queryParams = new URLSearchParams({
      ...params, 
      apiKey, 
      page, 
      pageSize,
      q: params.q || "world"
    }).toString();

   const response = await fetch(`${baseUrl}?${queryParams}`); 
    const news = await response.json();
    console.log(news)
    
    return news.articles;

  } catch (error) {
    console.error(error.message);
  }
}