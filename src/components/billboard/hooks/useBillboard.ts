import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

export default function useBillboard() {
  const { data, error, isLoading } = useSWR('/api/random', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  };
}
