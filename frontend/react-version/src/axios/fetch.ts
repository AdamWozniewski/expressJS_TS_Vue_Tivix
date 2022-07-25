import { FetchConfig } from '../types/FetchConfig';

const proxy = 'http://localhost:6001';
const API_URL = `${proxy}/api`;
const GET: string = 'GET';
const POST: string = 'POST';
const PUT: string = 'PUT';
const PATCH: string = 'PATCH';
const DELETE: string = 'DELETE';

const fetchService = (authToken?: string) => {
  async function createRequest(
    method: string,
    endpoint: string,
    body: any = {}
  ): Promise<any> {
    const fetchConfig: any = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        mode: 'cors',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODA5NGMwMWEwM2RlMGMyYzhkZmRiNyIsImlhdCI6MTY1Njk1OTQzNSwiZXhwIjoxNjU3MDQ1ODM1fQ.tf9oXDlNOH18kAsv9Pkq-WcnQbmBihpzSkvUATorzF8`,
        // ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
      ...(method !== 'GET' &&
        method !== 'DELETE' && { body: JSON.stringify(body) }),
    };
    console.log(`${API_URL}${endpoint}`);
    return await fetch(`${API_URL}${endpoint}`, { ...fetchConfig }).then((result) =>
      result.status < 200 || result.status > 299
        ? Promise.reject(result)
        : result.status === 204
          ? Promise.resolve()
          : result.json()
    ).then(data => ({ data }));
  }
  function get<TResult>(endpoint: string): Promise<TResult> {
    return createRequest(GET, endpoint);
  }
  function post<TResult>(endpoint: string, body?: any): Promise<TResult> {
    return createRequest(POST, endpoint, body);
  }
  function put<TResult>(endpoint: string, body?: any): Promise<TResult> {
    return createRequest(PUT, endpoint, body);
  }
  function patch<TResult>(endpoint: string, body?: any): Promise<TResult> {
    return createRequest(PATCH, endpoint, body);
  }
  function remove<TResult>(endpoint: string): Promise<TResult> {
    return createRequest(DELETE, endpoint, null);
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