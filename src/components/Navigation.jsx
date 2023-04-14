import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="container-fluid px-5 py-2 bg-warning">
      <div className="d-flex align-items-center">
        <h3 className="mb-0">
          <Link to="/" className="text-decoration-none text-dark site-logo">
            Todo App
          </Link>
        </h3>
        <nav className="ms-auto">
          <ul className="d-flex align-items-center list-unstyled mb-0">
            <li className="px-2 text-dark text-decoration-none nav-linkItem">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 text-dark text-decoration-none nav-linkItem">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2 text-dark text-decoration-none nav-linkItem">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Link className="btn btn-primary" to="/add-todo">
          Add Todo
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
