import { fetchTrendingMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { FidgetSpinner } from 'react-loader-spinner';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  //const [IsLoading, setIsLoading] = useState(false);

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
    <ul>
      {trendMovies.map((movie, index) => {
        const { title } = movie;
        return (
          <li key={index}>
            <Link to="/movies">
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
