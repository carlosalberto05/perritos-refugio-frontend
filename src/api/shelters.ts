import { useQuery, UseQueryResult } from '@tanstack/react-query';
import fetchApi from './client';
import { API_ENDPOINTS } from './config';
import { Shelter } from '../types/api';

export const shelterQueries = {
  all: () => ['shelters'] as const,
  list: () => [...shelterQueries.all(), 'list'] as const,
  detail: (id: string) => [...shelterQueries.all(), 'detail', id] as const,
};

export function useShelters(): UseQueryResult<Shelter[], Error> {
  return useQuery({
    queryKey: shelterQueries.list(),
    queryFn: async () => {
      const data = await fetchApi<Shelter[]>(API_ENDPOINTS.SHELTERS);
      return data;
    },
    staleTime: 1000 * 60 * 10,
    retry: 3,
  });
}

export function useShelter(id?: string): UseQueryResult<Shelter, Error> {
  return useQuery({
    queryKey: shelterQueries.detail(id || ''),
    queryFn: async () => {
      const shelter = await fetchApi<Shelter>(
        `${API_ENDPOINTS.SHELTERS}/${id}`
      );
      return shelter;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 15,
    retry: 3,
  });
}
