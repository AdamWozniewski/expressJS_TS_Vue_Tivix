import { FetchConfig } from '../types/FetchConfig';

const API_URL = '/api';

function fetchService(authToken?: string) {
  async function createRequest(
    method: string,
    endpoint: string,
    body: any = {}
  ): Promise<any> {
    const fetchConfig: FetchConfig = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
      ...(method !== 'GET' &&
        method !== 'DELETE' && { body: JSON.stringify(body) }),
    }
    return fetch(`${API_URL}/${endpoint}`, { ...fetchConfig }).then((result) =>
      result.status < 200 || result.status > 299
        ? Promise.reject(result)
        : result.status === 204
          ? Promise.resolve()
          : result.json()
    );
  }
  function get<TResult>(endpoint: string): Promise<TResult> {
    return createRequest('GET', endpoint);
  }
  function post<TResult>(endpoint: string, body: any): Promise<TResult> {
    return createRequest('POST', endpoint, body);
  }
  function put<TResult>(endpoint: string, body: any): Promise<TResult> {
    return createRequest('PUT', endpoint, body);
  }
  function patch<TResult>(endpoint: string, body: any): Promise<TResult> {
    return createRequest('PATCH', endpoint, body);
  }
  function remove<TResult>(endpoint: string): Promise<TResult> {
    return createRequest('DELETE', endpoint, null);
  }

  return {
    get,
    post,
    put,
    patch,
    remove,
  };
}

export const $https = fetchService();