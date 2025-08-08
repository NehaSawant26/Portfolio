import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="bg-[#1b2138] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
