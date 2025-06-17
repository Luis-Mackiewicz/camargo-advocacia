import PageContainer from "@/components/container/PageContainer";
import Card from "@/components/card/Card";
import "./Service.css";

const cardsData = [
  {
    image: "/service-page-images/book.svg",
    title: "Direito Previdenciário",
    description:
      "Assessoria em benefícios do INSS, aposentadorias, auxílio-doença, BPC/LOAS e revisões de cálculos, garantindo proteção e segurança ao trabalhador e sua família.",
  },
  {
    image: "/service-page-images/familly.svg",
    title: "Direito da Família",
    description:
      "Atuação em divórcios, pensão alimentícia, guarda de filhos, inventários, união estável e outras questões familiares, sempre com sensibilidade e foco na solução pacífica.",
  },
  {
    image: "/service-page-images/shop.svg",
    title: "Direito do Consumidor",
    description:
      "Defesa dos direitos do consumidor em casos de cobranças indevidas, vícios em produtos ou serviços, contratos abusivos e ações contra empresas.",
  },
  {
    image: "/service-page-images/column.svg",
    title: "Direito Público",
    description:
      "Atuação em causas envolvendo o poder público, como concursos, licitações, servidor público, improbidade administrativa e ações contra o Estado.",
  },
  {
    image: "/service-page-images/write.svg",
    title: "Registro de Marcas",
    description:
      "Auxílio completo no processo de registro de marcas junto ao INPI, incluindo buscas prévias, acompanhamento do processo e defesa contra oposições.",
  },
  {
    image: "/service-page-images/handshake.svg",
    title: "Mediação",
    description:
      "Resolução de conflitos de forma rápida, eficaz e amigável, sem a necessidade de processo judicial, promovendo acordos vantajosos para ambas as partes.",
  },
];

export default function Service() {
  return (
    <PageContainer>
      <div className="cards-wrapper">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </PageContainer>
  );
}
