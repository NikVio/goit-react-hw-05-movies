import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';

const HomePage = lazy(() => import('./Pages/HomePage'));
const Cast = lazy(() => import('./CastMovie/CastMovie'));
const NotFound = lazy(() => import('./NotFoundPage'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const Reviews = lazy(() => import('./ReviewsMovie/Reviews'));

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
