import { h } from "preact";

import App from "./containers/App/App";
// eslint-disable-next-line
import particlesJS from "particles.js/particles";

// import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const Year2018 = () => {
  document.body.classList.remove(...document.body.classList);
  document.body.classList.add("year-2018");

  return <App />;
};

export default Year2018;
