import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./index.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="app-container">
        <Header />

        <div className="central-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
