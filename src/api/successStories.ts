import { useQuery, UseQueryResult } from '@tanstack/react-query';
import fetchApi from './client';
import { API_ENDPOINTS } from './config';
import { SuccessStory } from '@/types/api';

export const storyQueries = {
  all: () => ['success-stories'] as const,
  list: () => [...storyQueries.all(), 'list'] as const,
};

export function useSuccessStories(): UseQueryResult<SuccessStory[], Error> {
  return useQuery({
    queryKey: storyQueries.list(),
    queryFn: async () => {
      const data = await fetchApi<SuccessStory[]>(
        API_ENDPOINTS.SUCCESS_STORIES
      );
      return data;
    },
    staleTime: 1000 * 60 * 30,
    retry: 3,
  });
}
