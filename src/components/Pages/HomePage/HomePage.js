import { Loader } from 'components/Loader/Loader';
import { fetchTrendingMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeItem,
  HomeList,
  HomeTitle,
  HomeTitlePage,
} from './HomePage.styled';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const getMovies = async () => {
      setIsloading(true);
      try {
        setError(false);
        const { results } = await fetchTrendingMovies({
          signal: abortController.signal,
        });
        setTrendMovies(prev => {
          return [...prev, ...results];
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    getMovies();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong. try reloading the page</p>}
      {trendMovies && (
        <div>
          <HomeTitlePage>Trending Movies</HomeTitlePage>
          <HomeList>
            {trendMovies.map((movie, index) => {
              const { title, id, poster_path } = movie;
              return (
                <HomeItem key={index}>
                  <Link to={`/movies/${id}`} state={{ from: location }}>
                    {poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                        width="auto"
                      />
                    )}
                    <HomeTitle>{title}</HomeTitle>
                  </Link>
                </HomeItem>
              );
            })}
          </HomeList>
        </div>
      )}
    </div>
  );
}
