import React, { Component } from "react";
//import logo from '../logo.svg';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// font awesome icons
import fontawesome from "@fortawesome/fontawesome";
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import faChevronLeft from "@fortawesome/fontawesome-free-solid/faChevronLeft";
import faChevronRight from "@fortawesome/fontawesome-free-solid/faChevronRight";
import faGithubAlt from "@fortawesome/fontawesome-free-brands/faGithubAlt";
import faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faStackOverflow from "@fortawesome/fontawesome-free-brands/faStackOverflow";
import faExternalLinkAlt from "@fortawesome/fontawesome-free-solid/faExternalLinkAlt";

import Main from '../Main/Main';
import Project from '../Project/Project';

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
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/project/:id" component={Project} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
