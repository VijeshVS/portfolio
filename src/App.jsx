import { useRef } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import SkillzSection from "./components/SkillzSection";
import Education from "./components/Education";
import Projects from "./components/Projects";
function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const eduRef = useRef(null);
  const projRef = useRef(null);

  return (
    <div>
      <Navbar projRef={projRef} eduRef={eduRef} skillsRef={skillsRef} homeRef={homeRef} aboutMeRef={aboutMeRef} />
      <div ref={homeRef} className="h-[70px]"> {   } </div>
      <Homepage/>      
      <AboutSection aboutMeRef={aboutMeRef}/>
      <SkillzSection skillsRef={skillsRef}/>
      <Education eduRef={eduRef}/>
      <Projects projRef={projRef}/>  
    </div>
  );
}

export default App;
