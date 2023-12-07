import { NavLink, Route, Routes } from 'react-router-dom';
import Cast from './CastMovie/CastMovie';
import { GlobalStyle } from './GlobalStyle';
import NotFound from './NotFoundPage';
import HomePage from './Pages/HomePage';
import MovieDetails from './Pages/MovieDetails';
import MoviesPage from './Pages/MoviesPage';
import Reviews from './ReviewsMovie/Reviews';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
};
