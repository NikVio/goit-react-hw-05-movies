import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading page...</p>}>
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
        <main>
          <Outlet />
        </main>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
