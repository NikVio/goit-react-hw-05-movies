import { Loader } from 'components/Loader/Loader';
import { fetchReviewsMovies } from 'components/MoviesService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsAuthor, ReviewsContainer } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    async function getReviews() {
      setIsloading(true);
      try {
        setError(false);
        const { results } = await fetchReviewsMovies(movieId, {
          signal: abortController.signal,
        });
        setReviews([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    getReviews();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong. try reloading the page</p>}
      {reviews.map((review, index) => {
        const { author, content } = review;
        return (
          <ReviewsContainer key={index}>
            <ReviewsAuthor>{author}</ReviewsAuthor>
            <p>{content}</p>
          </ReviewsContainer>
        );
      })}
    </>
  );
}
