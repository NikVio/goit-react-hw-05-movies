import { BsSearch } from 'react-icons/bs';

import { Loader } from 'components/Loader/Loader';
import { fetchSearchMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {
  SearchBtn,
  SearchForm,
  SearchInput,
  SearchMovieBox,
} from './MoviesPage.styled';
import { HomeItem, HomeList, HomeTitle } from '../HomePage/HomePage.styled';

export default function MoviesPage() {
  const [isLoading, setIsloading] = useState(false);
  const [movies, setMovie] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('result') ?? '';
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (query === '') return;

    async function getSearch() {
      setIsloading(true);
      try {
        setError(false);
        const { results } = await fetchSearchMovies(query);
        if (!results && !query) {
          return;
        }
        setMovie(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
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
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong. try reloading the page</p>}

      <SearchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <BsSearch size={25} />
        </SearchBtn>
        <SearchInput
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Search movie"
          name="result"
        ></SearchInput>
      </SearchForm>

      <SearchMovieBox>
        {movies.length !== 0 && (
          <HomeList>
            {movies.map((movie, index) => {
              const { original_title, id, poster_path } = movie;
              return (
                <HomeItem key={index}>
                  <Link to={`${id}`} state={{ from: location }}>
                    {poster_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={original_title}
                        width="auto"
                      />
                    )}

                    <HomeTitle>{original_title}</HomeTitle>
                  </Link>
                </HomeItem>
              );
            })}
          </HomeList>
        )}
      </SearchMovieBox>
      {movies.length === 0 && !isLoading && query !== '' && (
        <p>Movie {query} not found.</p>
      )}
    </>
  );
}
