import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">List All Todos</Link>
      </li>
      <li>
        <Link to="/add-todo">Add a Todo</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <a href="https://www.google.com" rel="noreferrer" target="_blank">
          Go to Google
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
