import { Loader } from 'components/Loader/Loader';
import { fetchDetailsMovies } from 'components/MoviesService';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  CoBack,
  DetailsBox,
  DetailsContainer,
  GenresBox,
  GenresText,
  LinkBox,
  OverwiewText,
  ScoreSpan,
  StyledLinkMovie,
} from './MovieDetals.styled';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [detailsMovie, setDetailsMovie] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    const abortController = new AbortController();
    async function getDetails() {
      setIsloading(true);
      try {
        setError(false);
        const fetchDetails = await fetchDetailsMovies(movieId, {
          signal: abortController.signal,
        });
        setDetailsMovie(fetchDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    getDetails();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  const { poster_path, title, vote_average, genres, overview } = detailsMovie;
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong. try reloading the page</p>}
      <Link to={backLinkRef.current.state?.from ?? '/movies'}>
        <CoBack>Go back</CoBack>
      </Link>
      {detailsMovie && (
        <div>
          <DetailsContainer>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
                width={250}
              />
            )}

            <DetailsBox>
              <h1>{title}</h1>
              <p>
                User score:{' '}
                <ScoreSpan>{Math.round(vote_average * 10)}%</ScoreSpan>
              </p>
              <h2>Overviev</h2>
              <OverwiewText>{overview}</OverwiewText>
              <h3>Genres</h3>
              <GenresBox>
                {genres &&
                  genres.map((el, index) => {
                    const { name } = el;
                    return <GenresText key={index}>{name}</GenresText>;
                  })}
              </GenresBox>
            </DetailsBox>
          </DetailsContainer>
          <LinkBox>
            <li>
              <StyledLinkMovie to="cast">Cast</StyledLinkMovie>
            </li>
            <li>
              <StyledLinkMovie to="reviews">Reviews</StyledLinkMovie>
            </li>
          </LinkBox>
          <Outlet />
        </div>
      )}
    </>
  );
}
