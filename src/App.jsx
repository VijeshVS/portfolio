import { useRef } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);

  return (
    <div>
      <Navbar homeRef={homeRef} aboutMeRef={aboutMeRef} />
      <Homepage homeRef={homeRef}/>      
      <AboutSection aboutMeRef={aboutMeRef}/>
    </div>
  );
}

export default App;
