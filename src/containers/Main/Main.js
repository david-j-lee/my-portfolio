import React from 'react';

import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Journey from "../../components/Journey/Journey";
// import Projects from "../Projects/Projects";
import ProjectsTiled from "../../components/ProjectsTiled/ProjectsTiled";
import Contact from "../../components/Contact/Contact";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Skills />
        {/* <Projects /> */}
        <ProjectsTiled />
        <Journey />
        <Contact />
      </div>
    )
  }
}