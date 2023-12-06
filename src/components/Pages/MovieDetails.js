import { fetchDetailsMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const params = useParams();
  console.log(params);

  const [detailsMovie, setDetailsMovie] = useState(null);

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
  return <div>Movies</div>;
  // <ul>
  //   {detailsMovie.map(data => {
  //     const {
  //       genres: { id, name },
  //       poster_path,
  //       title,
  //       overview,
  //       vote_average,
  //     } = data;
  //     return <li></li>;
  //   })}
  // </ul>
}
