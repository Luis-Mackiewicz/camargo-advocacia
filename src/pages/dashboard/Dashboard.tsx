import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import "./Dashboard.css"; // Assuming you have a CSS file for styling

export default function Dashboard() {
  return (
    <>
      <Header />
      <div>
        <div className="logo-camargo-advocacia">
          <img src="./../../public/slogan-branco.png" alt="Camargo advocacia" />
        </div>

        <div className="main-content">
          <span>
            <img src="../../public/themis.svg" alt="Themis" />
          </span>
          <span className="main-text">
            <p>Defendendo seus direitos com excelência e compromisso.</p>
          </span>
        </div>
      </div>

      <Footer />
    </>
  );
}
