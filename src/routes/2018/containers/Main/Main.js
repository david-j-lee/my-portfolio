import { h } from "preact";

import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Main = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
