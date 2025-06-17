import { NavLink } from "react-router-dom";
import "../header/Header.css";
import Button from "../button/Button";

export default function Header() {
  return (
    <header>
      <nav className="header-navigation">
        <ul className="header-list">
          <li>
            <NavLink to="/" className="active-link">
              início
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="active-link">
              sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="active-link">
              serviços
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="active-link">
              agendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/videos" className="active-link">
              vídeos
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </header>
  );
}
