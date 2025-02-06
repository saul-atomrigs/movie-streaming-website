import Billboard from '@/components/billboard';
import useMovieList from '@/components/movies/hooks/useMovieList';
import Movie from '@/components/movies/Movie';
import NavigationBar from '@/components/navigation/NavigationBar';

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
