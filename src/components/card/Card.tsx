import { useState } from "react";
import "./Card.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={`services-card ${isExpanded ? "expanded" : ""}`}
        onClick={() => {
          if (!isExpanded) toggleExpanded();
        }}
      >
        {isExpanded && (
          <button
            className="close-button"
            onClick={(e) => {
              e.stopPropagation();
              toggleExpanded();
            }}
            aria-label="Fechar"
          >
            &times;
          </button>
        )}

        <img src={image} alt={title} />
        <dl>
          <dt>{title}</dt>
          {isExpanded && <dd>{description}</dd>}
        </dl>
      </div>
    </>
  );
};

export default Card;
