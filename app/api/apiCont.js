import { apiKey } from '../apiKey/apiKey';

/**
 * Función para obtener las fuentes de noticias.
 * @param {Object} params - Parámetros adicionales para la consulta:
 *   - country: País de las fuentes (default: 'us').
 *   - category: Categoría de las fuentes (default: 'general').
 *   - language: Idioma de las fuentes (default: 'en').
 * @returns {Array} Lista de fuentes obtenidas desde la API.
 */
export async function apiCont(params = {}) {
  try {
    const baseUrl = `https://newsapi.org/v2/top-headlines/sources`;

    const queryParams = new URLSearchParams({
      ...params,
      apiKey,
      country: params.country || 'us',  
      category: params.category || 'general', 
      language: params.language || 'en',  
    }).toString();

    const response = await fetch(`${baseUrl}?${queryParams}`);
    const data = await response.json();

    if (data.status === 'ok' && data.sources) {
      return data.sources;
    } else {
      return [];
    }

  } catch (error) {
    console.error("Error al obtener las fuentes:", error);
    return [];
  }
}
