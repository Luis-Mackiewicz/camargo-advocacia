import "../../components/container/PageContainer";
import PageContainer from "../../components/container/PageContainer";
import "./Videos.css";

export default function Videos() {
  const commingSonImage = "/coming-soon.svg";

  return (
    <>
      <PageContainer>
        <div className="videos-container">
          <div className="video-text">
            <h1>Seção de vídeos em breve!</h1>
            <h2>
              Estamos prearando uma nova seção com videos exclusívos sobre
              direito
            </h2>
          </div>

          <img
            src={commingSonImage}
            alt="comming soon"
            className="video-image"
          />
        </div>
      </PageContainer>
    </>
  );
}
