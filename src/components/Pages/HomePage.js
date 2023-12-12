import { fetchTrendingMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { FidgetSpinner } from 'react-loader-spinner';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  //const [IsLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (trendMovies === []) {
      return;
    }
  });
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setTrendMovies(prev => {
          return [...prev, ...results];
        });
      } catch (error) {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      {trendMovies && (
        <ul>
          {trendMovies.map((movie, index) => {
            const { title, id, poster_path } = movie;
            return (
              <li key={index}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt={title}
                      width={250}
                    />
                  )}
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
