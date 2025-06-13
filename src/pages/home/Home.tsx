import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="main-container">
        <div className="container-logo-image">
          <img src="/logo.svg" alt="Camargo advocacia" />
        </div>

        <div className="main-content">
          <span className="text-box">
            <h1>Defendendo seus direitos com excelência e compromisso.</h1>
          </span>
        </div>
        <div className="themis-image-box">
          <div className="themis-image-div" />
        </div>
      </div>
    </>
  );
}
