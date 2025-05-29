import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">início</Link>
        <Link to="/sobre">sobre</Link>
        <Link to="/servicos">serviços</Link>
        <Link to="/agendar">agendar</Link>
        <Link to="/videos">vídeos</Link>
      </nav>
      <a
        href="https://wa.me/SEUNUMEROAQUI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="whatsapp-button">chame</button>
      </a>
    </header>
  );
}
