import { useQuery, UseQueryResult } from '@tanstack/react-query';
import fetchApi from './client';
import { API_ENDPOINTS } from './config';
import { Dog } from '../types/api';

export const dogQueries = {
  all: () => ['dogs'] as const,
  list: () => [...dogQueries.all(), 'list'] as const,
  listByShelterId: (shelterId: string) =>
    [...dogQueries.all(), 'list', shelterId] as const,
  detail: (id: string) => [...dogQueries.all(), 'detail', id] as const,
  available: () => [...dogQueries.all(), 'available'] as const,
};

export function useDogs(): UseQueryResult<Dog[], Error> {
  return useQuery({
    queryKey: dogQueries.list(),
    queryFn: async () => {
      const data = await fetchApi<Dog[]>(API_ENDPOINTS.DOGS);
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 3, // Retry once on failure
  });
}

export function useDogsByShelterId(
  shelterId?: string
): UseQueryResult<Dog[], Error> {
  return useQuery({
    queryKey: dogQueries.listByShelterId(shelterId || ''),
    queryFn: async () => {
      const data = await fetchApi<Dog[]>(API_ENDPOINTS.DOGS, {
        params: { shelterId: shelterId! },
      });
      return data;
    },
    enabled: !!shelterId,
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
}

export function useDog(id?: string): UseQueryResult<Dog, Error> {
  return useQuery({
    queryKey: dogQueries.detail(id || ''),
    queryFn: async () => {
      const dog = await fetchApi<Dog>(`${API_ENDPOINTS.DOGS}/${id}`);
      return dog;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
    retry: 3,
  });
}

export function useAvailableDogs(): UseQueryResult<Dog[], Error> {
  return useQuery({
    queryKey: dogQueries.available(),
    queryFn: async () => {
      const data = await fetchApi<Dog[]>(API_ENDPOINTS.DOGS, {
        params: { adoptionStatus: 'En adopción' },
      });
      return data;
    },
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });
}
