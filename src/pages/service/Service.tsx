// pages/Service.tsx
import PageContainer from "@/components/container/PageContainer";
import Card from "@/components/card/Card";

const cardsData = [
  {
    image: "./service-images/book.svg",
    title: "Direito previdenciario",
    description: "Descrição do serviço 1.",
  },
  {
    image: "/images/card2.jpg",
    title: "Direito da família",
    description: "Descrição do serviço 2.",
  },
  {
    image: "/images/card3.jpg",
    title: "Direito do consumidor",
    description: "Descrição do serviço 3.",
  },
  {
    image: "/images/card4.jpg",
    title: "Direito público",
    description: "Descrição do serviço 4.",
  },
  {
    image: "/images/card5.jpg",
    title: "Registro de marcas",
    description: "Descrição do serviço 5.",
  },
  {
    image: "/images/card6.jpg",
    title: "Mediação",
    description: "Contatos",
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
