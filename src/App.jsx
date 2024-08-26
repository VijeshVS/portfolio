import { useRef } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SkillzSection from "./components/SkillzSection";
function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div>
      <Navbar skillsRef={skillsRef} homeRef={homeRef} aboutMeRef={aboutMeRef} />
      <div ref={homeRef} className="h-[70px]"> {   } </div>
      <Homepage/>      
      <AboutSection aboutMeRef={aboutMeRef}/>
      <SkillzSection skillsRef={skillsRef}/>
    </div>
  );
}

export default App;
