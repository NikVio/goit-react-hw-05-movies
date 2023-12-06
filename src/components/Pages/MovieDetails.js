import { fetchDetailsMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const params = useParams();
  console.log(params);

  const [detailsMovie, setDetailsMovie] = useState([]);

  useEffect(() => {
    async function getDetails() {
      try {
        const fetchDetails = await fetchDetailsMovies(params.movieId);
        setDetailsMovie(fetchDetails);
      } catch (error) {
        console.log('error');
      }
    }
    getDetails();
  }, [params.movieId]);

  const imgURL = () => {
    const { poster_path } = detailsMovie;
    const BASE_URL = 'https://image.tmdb.org/t/p/w200';
    return BASE_URL + poster_path;
  };

  return (
    <div>
      {/* {detailsMovie.map(data => {
        const {
          genres: { id, name },
          poster_path,
          title,
          overview,
          vote_average,
        } = data;
        return (
          <div key={id}>
            <img src={poster_path} alt={title} />
            <h1>{title}</h1>
            <p>{vote_average}</p>
            <h2>Overviev</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
          </div>
        );
      })} */}

      <img src={imgURL()} alt={detailsMovie.title} />
      <h1>{detailsMovie.title}</h1>
      <p>{detailsMovie.vote_average}</p>
      <h2>Overviev</h2>
      <p>{detailsMovie.overview}</p>
      <h3>Genres</h3>
      {detailsMovie.genres.map(({ name }, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}
