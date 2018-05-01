import React, { Component } from "react";
//import logo from '../logo.svg';
import "./App.css";

// font awesome icons
import fontawesome from "@fortawesome/fontawesome";
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import faChevronLeft from "@fortawesome/fontawesome-free-solid/faChevronLeft";
import faChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight";
import faGithubAlt from "@fortawesome/fontawesome-free-brands/faGithubAlt";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faStackOverflow from "@fortawesome/fontawesome-free-brands/faStackOverflow";
import faExternalLinkAlt from "@fortawesome/fontawesome-free-solid/faExternalLinkAlt";

import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Journey from "../Journey/Journey";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

class App extends Component {
  render() {
    fontawesome.library.add(
      faChevronDown,
      faChevronLeft,
      faChevronRight,
      faGithubAlt,
      faLinkedin,
      faStackOverflow,
      faExternalLinkAlt
    );
    return (
      <div className="App">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </div>
    );
  }
}

export default App;
