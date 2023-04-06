import About from "./componets/About"
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import Portfolio from "./componets/Portfolio";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import SocialLinks from "./componets/SocialLinks";

function App() {
  return (
    
      <div>
        <NavBar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
        
        <SocialLinks/>
      </div>
  );
}

export default App;
