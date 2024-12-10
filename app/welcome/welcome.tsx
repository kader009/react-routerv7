import { Link } from "react-router";

export function Welcome() {
  return (
    <main >
      <h1 className="font-semibold capitalize">hellow v7</h1>
      <Link to={'/about'}>About</Link>
    </main>
  );
}
