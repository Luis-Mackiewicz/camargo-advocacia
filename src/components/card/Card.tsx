import "./Card.css";
import { useState } from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpaned = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`services-card ${isExpanded ? "expanded" : ""}`}
        onClick={toggleExpaned}
      >
        <img src={image} />
        <dl>
          <dt>{title}</dt>
          {isExpanded && <dd>{description}</dd>}
        </dl>
      </div>
    </>
  );
};

export default Card;
