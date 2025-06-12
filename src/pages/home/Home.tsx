import "./Home.css";

export default function Home() {
  return (
    <>
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
    </>
  );
}
