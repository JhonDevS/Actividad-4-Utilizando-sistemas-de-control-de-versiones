/**
 * Configuración base para llamadas API
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.example.com';

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

/**
 * Función auxiliar para realizar peticiones HTTP
 * 
 * :param endpoint: Endpoint de la API
 * :param options: Opciones de la petición
 * :returns: Respuesta parseada de la API
 * :raises Error: Si la petición falla
 */
const request = async <T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> => {
  const { params, ...fetchOptions } = options;

  let url = `${API_BASE_URL}${endpoint}`;

  if (params) {
    const queryString = new URLSearchParams(params).toString();
    url += `?${queryString}`;
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

/**
 * Servicio API con métodos comunes
 */
export const api = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, data?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),

  put: <T>(endpoint: string, data?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'DELETE' }),
};

