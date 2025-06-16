import "../../components/container/PageContainer";
import PageContainer from "../../components/container/PageContainer";
import "./About.css";
export default function About() {
  const judgeImage = "../../../public/blue-img.jpg";
  return (
    <>
      <PageContainer>
        <img className="judge-image" src={judgeImage} alt="judge image" />
        <dl className="about-description-list">
          <dt className="about-description-title">Sobre nós</dt>
          <dd className="about-description-details">
            Na Camargo Advocacia , acreditamos que o direito é mais do que uma
            profissão: é uma ferramenta poderosa para transformar vidas,
            proteger direitos e promover justiça. Fundada com o compromisso de
            oferecer soluções jurídicas personalizadas e eficazes, nossa equipe
            está preparada para atender às mais diversas demandas legais com
            excelência e transparência.
          </dd>
        </dl>
      </PageContainer>
    </>
  );
}
