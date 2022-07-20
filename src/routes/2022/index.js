import { h } from "preact";

import Experience from "./components/experience";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Socials from "./components/socials";
import TechStack from "./components/tech-stack";

const Year2022 = () => {
  document.body.classList.remove(...document.body.classList);
  document.body.classList.add("year-2022");

  return (
    <div class="app">
      <Intro />
      <Experience />
      <Projects />
      <TechStack />
      <Socials />
    </div>
  );
};

export default Year2022;
