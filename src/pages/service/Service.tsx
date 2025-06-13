// pages/Service.tsx
import PageContainer from "@/components/container/PageContainer";
import Card from "@/components/card/Card";

const cardsData = [
  {
    image: "/service-page-images/book.svg",
    title: "Direito previdenciario",
    description: "Descrição do serviço 1.",
  },
  {
    image: "/service-page-images/familly.svg",
    title: "Direito da família",
    description: "Descrição do serviço 2.",
  },
  {
    image: "/service-page-images/shop.svg",
    title: "Direito do consumidor",
    description: "Descrição do serviço 3.",
  },
  {
    image: "/service-page-images/column.svg",
    title: "Direito público",
    description: "Descrição do serviço 4.",
  },
  {
    image: "/service-page-images/write.svg",
    title: "Registro de marcas",
    description: "Descrição do serviço 5.",
  },
  {
    image: "/service-page-images/handshake.svg",
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
