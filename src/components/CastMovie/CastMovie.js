import { fetchCreditsMovies } from 'components/MoviesService';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (cast === []) {
      return;
    }
  });

  useEffect(() => {
    async function getCast() {
      try {
        const { cast } = await fetchCreditsMovies(movieId);
        setCast([...cast]);
      } catch (error) {
        console.log('error');
      }
    }
    getCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map((actor, index) => {
          const { profile_path, character, name } = actor;
          return (
            <li key={index}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  width={250}
                />
              )}
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
