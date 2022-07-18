import { h } from "preact";

import style from "./style.scss";

import Experience from "./components/experience";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Socials from "./components/socials";
import TechStack from "./components/tech-stack";

const Year2022 = () => (
  <div class={style.app}>
    <Intro />
    <Experience />
    <Projects />
    <TechStack />
    <Socials />
  </div>
);

export default Year2022;
