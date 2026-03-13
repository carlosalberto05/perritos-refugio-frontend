const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001') + '/api';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const API_ENDPOINTS = {
  DOGS: `${API_BASE_URL}/dogs`,
  SHELTERS: `${API_BASE_URL}/shelters`,
  SUCCESS_STORIES: `${API_BASE_URL}/success-stories`,
};
