import "./Footer.css";
export default function Footer() {
  const whatsappLink =
    "https://wa.me/554499912505?text=Oi%21%20Estou%20entrando%20em%20contato%20com%20a%20Camargo%20Advocacia%20para%20falar%20sobre%20um%20assunto%20juridico.%20Poderiamos%20conversar%3F";

  return (
    <footer id="footer">
      <div className="footer-line">
        <hr />
      </div>

      <div className="footer-elements">
        <nav className="footer-nav">
          <ul className="footer-list">
            <li>
              <a href={whatsappLink}>
                <img
                  className="footer-images"
                  src="/footer-images/whatsapp-footer.png"
                  alt="whatzap"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/camargoadvocacia1?igsh=Z2h0empvemE1M3do">
                <img
                  className="footer-images"
                  src="/footer-images/instagram.png"
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Camargoadvocacia1/?locale=pt_BR">
                <img
                  className="footer-images"
                  src="/footer-images/facebook.png"
                  alt="facebook"
                />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/">
                <img
                  className="footer-images"
                  src="/footer-images/youtube.png"
                  alt="youtube"
                />
              </a>
            </li>
          </ul>
        </nav>
        <address className="footer-address">
          Endereço: Janiópolis - PR
          <br />
          Rua: Tiradentes, N* 535
          <br />
          CEP: 87380-000 - Janiópolis/PR
        </address>
      </div>
    </footer>
  );
}
