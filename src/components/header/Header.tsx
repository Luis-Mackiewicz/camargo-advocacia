import { Link } from "react-router-dom";
import "../header/Header.css";

export default function Header() {
  return (
    <header>
      <nav className="header-navigation">
        <ul className="header-list">
          <li>
            <Link to="/">início</Link>
          </li>
          <li>
            <Link to="/about">sobre</Link>
          </li>
          <li>
            <Link to="/services">serviços</Link>
          </li>
          <li>
            <Link to="/contact-us">agendar</Link>
          </li>
          <li>
            <Link to="/videos">vídeos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
