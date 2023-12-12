import { fetchCreditsMovies } from 'components/MoviesService';
import notPhoto from '../NotPhoto.png';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loader } from 'components/Loader/Loader';
import { HomeList } from 'components/Pages/HomePage/HomePage.styled';
import {
  CastCharacter,
  CastPhoto,
  CastPhotoBox,
  CastTitle,
} from './CastMovie.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    async function getCast() {
      setIsloading(true);
      try {
        setError(false);
        const { cast } = await fetchCreditsMovies(movieId, {
          signal: abortController.signal,
        });
        setCast([...cast]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    getCast();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong. try reloading the page</p>}
      <HomeList>
        {cast.map((actor, index) => {
          const { profile_path, character, name } = actor;
          return (
            <CastPhoto key={index}>
              <CastPhotoBox>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                    width="auto"
                  />
                ) : (
                  <img src={notPhoto} alt={name} width="auto" />
                )}
              </CastPhotoBox>
              <CastTitle>
                {name}
                <CastCharacter>{character}</CastCharacter>
              </CastTitle>
            </CastPhoto>
          );
        })}
      </HomeList>
    </>
  );
}
