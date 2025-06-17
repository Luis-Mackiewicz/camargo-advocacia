import { useState } from "react";
import PageContainer from "../../components/container/PageContainer";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState<string>("");

  const camargoLogoImage = "/logo.svg";
  const googleMapsLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.0545816606848!2d-52.782924250357624!3d-24.14321361034821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f280d61498ce6b%3A0x82a00122dd0aa7c5!2sCamargo%20Advocacia%20e%20Assessoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sbr!4v1750092468723!5m2!1spt-BR!2sbr";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("Sua mensagem foi enviada com sucesso!");

    event.currentTarget.reset();

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  return (
    <PageContainer>
      <div className="contact-us">
        <aside className="aside-information">
          <img
            className="contact-camargo-logo"
            src={camargoLogoImage}
            alt="Camargo Advocacia"
          />
          <p>Localização:</p>
          <iframe
            className="google-map"
            src={googleMapsLocation}
            loading="lazy"
          />
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="floating-label-wrapper">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder=" "
              className="contact-input-form"
              required
            />
            <label htmlFor="nome" className="floating-label">
              Nome
            </label>
          </div>

          <div className="floating-label-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              className="contact-input-form"
              required
            />
            <label htmlFor="email" className="floating-label">
              E-mail
            </label>
          </div>

          <div className="floating-label-wrapper">
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder=" "
              className="contact-input-form"
              required
            />
            <label htmlFor="telefone" className="floating-label">
              Telefone
            </label>
          </div>

          <div className="floating-label-wrapper">
            <select
              id="area"
              name="area"
              className="contact-input-form"
              required
              defaultValue=""
            >
              <option value="" disabled hidden>
                Selecione uma área
              </option>
              <option value="civil">Direito Civil</option>
              <option value="penal">Direito Penal</option>
              <option value="trabalhista">Direito Trabalhista</option>
              <option value="previdenciário">Direito Previdenciário</option>
              <option value="empresarial">Direito Empresarial</option>
              <option value="familia">Direito da Família</option>
              <option value="consumidor">Direito do Consumidor</option>
              <option value="outro">Outro</option>
            </select>
            <label htmlFor="area" className="floating-label">
              Área do Direito
            </label>
          </div>

          <div className="floating-label-wrapper">
            <textarea
              id="descricao"
              name="descricao"
              placeholder=" "
              className="contact-input-form"
              required
            ></textarea>
            <label htmlFor="descricao" className="floating-label">
              Descreva seu caso
            </label>
          </div>

          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <div className="buttons-container">
            <button
              type="button"
              className="button-back"
              onClick={() => navigate("/")}
            >
              Voltar
            </button>
            <button type="submit" className="button-submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
}
