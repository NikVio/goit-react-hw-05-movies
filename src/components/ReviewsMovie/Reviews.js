import { fetchReviewsMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const { results } = await fetchReviewsMovies(movieId);
        setReviews([...results]);
      } catch (error) {
        console.log('error');
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.map((review, index) => {
        const { author, content } = review;
        return (
          <div key={index}>
            <h4>{author}</h4>
            <p>{content}</p>
          </div>
        );
      })}
    </>
  );
}
