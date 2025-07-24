import { SiSkillshare } from "react-icons/si";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
