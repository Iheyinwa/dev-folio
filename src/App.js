import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './styles/main.css';
import { motion, useScroll } from "framer-motion";

export default function App() {
	 const { scrollYProgress } = useScroll();
	return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
