import { Link } from "react-router-dom";
import "../header/Header.css";
import Button from "../button/Button";

export default function Header() {
  return (
    <header>
      <nav className="header-navigation">
        <ul className="header-list">
          <li>
            <Link to="/">início</Link>
          </li>
          <li>
            <Link to="/about" className="active-link">
              sobre
            </Link>
          </li>
          <li>
            <Link to="/services" className="active-link">
              serviços
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="active-link">
              agendar
            </Link>
          </li>
          <li>
            <Link to="/videos" className="active-link">
              vídeos
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </header>
  );
}
