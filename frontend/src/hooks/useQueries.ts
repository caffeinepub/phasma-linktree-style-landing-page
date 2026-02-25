import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useGetProjects() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, string]>>({
    queryKey: ['projects'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetSocialLinks() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, string]>>({
    queryKey: ['socialLinks'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSocialLinks();
    },
    enabled: !!actor && !isFetching,
  });
}
