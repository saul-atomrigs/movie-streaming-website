import Billboard from '@/src/components/billboard';
import useMovieList from '@/src/components/movies/hooks/useMovieList';
import Movie from '@/src/components/movies/Movie';
import NavigationBar from '@/src/components/navigation/NavigationBar';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <NavigationBar />
      <Billboard />
      <div className="pb-40">
        <Movie.List title="추천 콘텐츠" data={movies}>
          {movies.map(movie => (
            <Movie.Card key={movie.id} data={movie}>
              <Movie.SubCard data={movie} />
            </Movie.Card>
          ))}
        </Movie.List>
      </div>
    </>
  );
}
