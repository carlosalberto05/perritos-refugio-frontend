import { apiConfig } from './config';

export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

async function fetchApi<T>(url: string, options?: FetchOptions): Promise<T> {
  const { params, ...fetchOptions } = options || {};

  let finalUrl = url;
  if (params) {
    const queryString = new URLSearchParams(
      Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, String(value)])
    ).toString();
    finalUrl = queryString ? `${url}?${queryString}` : url;
  }

  try {
    const response = await fetch(finalUrl, {
      ...apiConfig,
      ...fetchOptions,
      headers: {
        ...apiConfig.headers,
        ...fetchOptions.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // Si la respuesta viene envuelta en ApiResponse { success, data, message }, extraemos .data
    return data && typeof data === 'object' && 'data' in data ? data.data : data;
  } catch (error) {
    console.error('Fetch API error:', error);
    throw error;
  }
}

export default fetchApi;
