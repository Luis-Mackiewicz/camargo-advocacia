import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const logoImage = "../../../public/logo.svg";
const ladyOfJusticeImage = "../../../public/themis.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <motion.div
          className="home-main-container"
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={logoImage}
            alt="camargo advocacia"
            className="home-camargo-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Defendendo seus direitos com excelência e compromisso.
          </motion.h1>
          <motion.button
            className="home-button"
            onClick={() => navigate("contact-us")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            agendar
          </motion.button>
        </motion.div>
        <motion.div
          className="themis-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <img
            src={ladyOfJusticeImage}
            alt="themis image"
            className="themis-image"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
