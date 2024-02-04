import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hello from "./Pages/Hello/Hello";
import Skills from "./Pages/Skills/Skills.jsx";
import Projects_Page from "./Pages/Projects/Projects_Page";
import About_me from "./Pages/About_me/About_me";

function App() {
  return (
    <Router>
      <div className="all">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/about_me" element={<About_me />} />
          <Route path="/projects" element={<Projects_Page />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
