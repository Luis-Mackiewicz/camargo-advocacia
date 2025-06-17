import "./Home.css";
import { useNavigate } from "react-router-dom";

const logoImage = "../../../public/logo.svg";
const ladyOfJusticeImage = "../../../public/themis.svg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <div className="home-main-container">
          <img
            src={logoImage}
            alt="camargo advocacia"
            className="home-camargo-logo"
          />
          <h1>Defendendo seus direitos com excelência e compromisso.</h1>
          <button
            className="home-button"
            onClick={() => {
              navigate("contact-us");
            }}
          >
            agendar
          </button>
        </div>
        <div className="themis-container">
          <img
            src={ladyOfJusticeImage}
            alt="themis image"
            className="themis-image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
