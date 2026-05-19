import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">

      <ul className="nav-list">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/posts">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;