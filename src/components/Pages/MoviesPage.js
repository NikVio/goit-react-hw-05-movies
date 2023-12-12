import { fetchSearchMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovie] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('result') ?? '';

  const location = useLocation();

  useEffect(() => {
    async function getSearch() {
      try {
        const { results } = await fetchSearchMovies(query);
        if (!results && !query) {
          return;
        }
        setMovie(results);
      } catch (error) {
        console.log('error');
      }
    }
    getSearch();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.result;
    if (value) {
      setParams({ result: value });
    }
    evt.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search movie"
          name="result"
        ></input>
      </form>
      <div>
        {movies && (
          <ul>
            {movies.map((movie, index) => {
              const { original_title, id, poster_path } = movie;
              return (
                <li key={index}>
                  <Link to={`${id}`} state={{ from: location }}>
                    {poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={original_title}
                        width={250}
                      />
                    )}
                    {original_title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {movies.length === 0 && query && <p>Movie "{query}" not found.</p>}
    </>
  );
}
