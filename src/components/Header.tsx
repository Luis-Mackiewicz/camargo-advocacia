import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const whatsappLink =
    "https://wa.me/554499912505?text=Oi%21%20Estou%20entrando%20em%20contato%20com%20a%20Camargo%20Advocacia%20para%20falar%20sobre%20um%20assunto%20juridico.%20Poderiamos%20conversar%3F";

  return (
    <header className="header">
      <nav>
        <Link to="/">início</Link>
        <Link to="/sobre">sobre</Link>
        <Link to="/servicos">serviços</Link>
        <Link to="/agendar">agendar</Link>
        <Link to="/videos">vídeos</Link>
      </nav>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className="whatsapp-button">
          chame{" "}
          <img
            id="whatsapp-image"
            src="../../public/whatsapp-header.png"
            alt="WhatsApp image"
          />
        </button>
      </a>
    </header>
  );
}
