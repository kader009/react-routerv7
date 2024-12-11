import { Link } from 'react-router';

export function Welcome() {
  return (
    <main>
      <h1 className="font-semibold capitalize">hellow v7</h1>
      <Link to={'/about'} viewTransition>About</Link>
      <br />
      <Link to={'/login'}>Login</Link>
      <br />
      <Link to={'/register'}>Register</Link>
      <br />
      <Link to={'/loader'}>Loader</Link>
      <br />
      <Link to={'/client'}>ClientLoader</Link>
    </main>
  );
}
