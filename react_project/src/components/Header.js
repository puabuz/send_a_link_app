import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container">
          <ul>
            <li>
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/create">
                Create
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/note">
                Note
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
