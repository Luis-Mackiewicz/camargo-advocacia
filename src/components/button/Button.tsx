import "./Button.css";

const whatsappLink =
  "https://wa.me/554499912505?text=Oi%21%20Estou%20entrando%20em%20contato%20com%20a%20Camargo%20Advocacia%20para%20falar%20sobre%20um%20assunto%20juridico.%20Poderiamos%20conversar%3F";

export default function Button() {
  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      Chame
      <img src="/whatsapp-header.png" alt="WhatsApp" />
    </button>
  );
}
