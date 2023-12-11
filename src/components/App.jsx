import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';
import Cast from './CastMovie/CastMovie';

import NotFound from './NotFoundPage';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetails';
import MoviesPage from './Pages/MoviesPage';
import Reviews from './ReviewsMovie/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
