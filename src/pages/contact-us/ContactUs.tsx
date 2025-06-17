import "../../components/container/PageContainer";
import PageContainer from "../../components/container/PageContainer";
import "./ContactUs.css";
export default function ContactUs() {
  const camargoLogoImage = "/logo.svg";
  const googleMapsLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.0545816606848!2d-52.782924250357624!3d-24.14321361034821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f280d61498ce6b%3A0x82a00122dd0aa7c5!2sCamargo%20Advocacia%20e%20Assessoria%20Jur%C3%ADdica!5e0!3m2!1spt-BR!2sbr!4v1750092468723!5m2!1spt-BR!2sbr";
  return (
    <>
      <PageContainer>
        <div className="contact-us">
          <aside className="aside-information">
            <img
              className="contact-camargo-logo"
              src={camargoLogoImage}
              alt="camargo advocacia"
            />
            <p>Localização:</p>
            <iframe className="google-map" src={googleMapsLocation} />
          </aside>
          <form action="" className="contact-form">
            <input
              type="text"
              placeholder="Nome"
              className="contact-input-form"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="contact-input-form"
            />
            <input
              type="password"
              placeholder="Telefone"
              className="contact-input-form"
            />
            <input
              type="tel"
              placeholder="tipo de caso"
              className="contact-input-form"
            />
            <textarea name="" id="" placeholder="d"></textarea>
          </form>
        </div>
      </PageContainer>
    </>
  );
}
