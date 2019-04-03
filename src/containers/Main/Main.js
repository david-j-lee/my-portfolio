import React from 'react';

import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    )
  }
}