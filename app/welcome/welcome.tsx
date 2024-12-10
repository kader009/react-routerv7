import { Link } from "react-router";
import Footer from "~/components/Footer";

export function Welcome() {
  return (
    <main>
      <h1 className="font-semibold capitalize">hellow v7</h1>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/login'}>Login</Link>
      <br />
      <Link to={'/register'}>Register</Link>
      <Footer/>
    </main>
  );
}
