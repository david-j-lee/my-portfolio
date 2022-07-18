import { h } from "preact";
import { Router } from "preact-router";

import "./App.scss";

// font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons/faGithubAlt";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons/faStackOverflow";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

import Main from "../Main/Main";
import Project from "../Project/Project";

const App = () => {
  library.add(
    faChevronDown,
    faArrowLeft,
    faGithub,
    faGithubAlt,
    faLinkedin,
    faStackOverflow,
    faExternalLinkAlt
  );
  return (
    <div className="App">
      <Router>
        <Main path="/2018" />
        <Project path="/2018/project/:id" />
      </Router>
    </div>
  );
};

export default App;
