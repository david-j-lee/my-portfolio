import { h } from "preact";

import App from "./containers/App/App";
// eslint-disable-next-line
import particlesJS from "particles.js/particles";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const Year2018 = () => (
  <div className="year-2018">
    <App />
  </div>
);

export default Year2018;
