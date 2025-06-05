import "../styles/Footer.css";

export default function Footer() {
  const whatsappLink =
    "https://wa.me/554499912505?text=Oi%21%20Estou%20entrando%20em%20contato%20com%20a%20Camargo%20Advocacia%20para%20falar%20sobre%20um%20assunto%20juridico.%20Poderiamos%20conversar%3F";

  return (
    <footer>
      <address>
        Endereço: Janiópolis - PR
        <br />
        Rua: Tiradentes, N* 535
        <br />
        CEP: 87380-000 - Janiópolis/PR
      </address>
      <nav>
        <ul>
          <li>
            <a href={whatsappLink}>
              <img
                className="footer-images"
                src="../../public/whatsapp-footer.png"
                alt="whatzap"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/camargoadvocacia1?igsh=Z2h0empvemE1M3do">
              <img src="../../public/instagram.png" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Camargoadvocacia1/?locale=pt_BR">
              <img src="../../public/facebook.png" alt="facebook" />
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/">
              <img src="../../public/youtube.png" alt="youtube" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
