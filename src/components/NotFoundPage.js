import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <p>
        Sorry! Page not found. You can return to our <Link to="/">Home</Link>
      </p>
    </div>
  );
}
