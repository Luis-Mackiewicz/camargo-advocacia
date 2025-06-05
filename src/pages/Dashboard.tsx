import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <img
          id="camargo-advocacia"
          src="./../../public/slogan-branco.png"
          alt="Camargo advocacia"
        />
        <img id="themis" src="./../../public/themis.png" alt="Themis" />
      </main>
      <aside>
        <img />
      </aside>
      <Footer />
    </>
  );
}
