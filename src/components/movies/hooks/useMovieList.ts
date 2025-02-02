import fetcher from '@/lib/fetcher';
import useSWR from 'swr';
import { MovieType } from '../types';

const useMovieList = () => {
  const { data, isLoading, error } = useSWR<MovieType[]>('/api/movies', fetcher);

  return {
    data,
    isLoading,
    error,
  };
};

export default useMovieList;
export { useMovieList };
