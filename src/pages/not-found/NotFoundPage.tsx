import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/container/PageContainer";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="notfound-container">
        <img
          src="/not-found.svg"
          alt="sad dog"
          width={250}
          className="notfound-img"
        />
        <h1>Opss...</h1>
        <p>
          Essa página não foi encontrada. <br />
          Volte para a página inicial.
        </p>
        <button onClick={() => navigate("/")} className="notfound-button">
          Início
        </button>
      </div>
    </PageContainer>
  );
}
