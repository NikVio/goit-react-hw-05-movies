import { fetchDetailsMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [detailsMovie, setDetailsMovie] = useState([]);

  useEffect(() => {
    if (movieId === []) {
      return;
    }
  });

  useEffect(() => {
    async function getDetails() {
      try {
        const fetchDetails = await fetchDetailsMovies(movieId);
        setDetailsMovie(fetchDetails);
      } catch (error) {
        console.log('error');
      }
    }
    getDetails();
  }, [movieId]);

  const { poster_path, title, vote_average, genres, overview } = detailsMovie;
  return (
    <>
      {detailsMovie && (
        <div>
          <div>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                width={250}
              />
            )}
          </div>
          <div>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average * 10)}%</p>
            <h2>Overviev</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres &&
              genres.map((el, index) => {
                const { name } = el;
                return <p key={index}>{name}</p>;
              })}
          </div>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
}
