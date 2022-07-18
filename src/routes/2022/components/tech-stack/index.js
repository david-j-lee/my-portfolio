import { h } from "preact";

import style from "./style.scss";

const TechStack = () => (
  <div className={style["tech-stack"]}>
    <h2>Technologies</h2>
    <ul>
      {/* C# */}
      <li>C#</li>
      <li>.NET Core</li>
      <li>.NET WPF</li>
      <li>Unity</li>
      {/* TS/JS */}
      <li>Typescript</li>
      <li>Javascript</li>
      <li>React</li>
      <li>Preact</li>
      <li>Angular</li>
      <li>Node</li>
      <li>Electron</li>
      {/* Java */}
      <li>Java</li>
      <li>Jersey</li>
      {/* Python */}
      <li>Python</li>
      <li>Django</li>
      {/* Databases */}
      <li>SQL</li>
      <li>PostgreSQL</li>
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>Elastic Search</li>
      {/* Containerization */}
      <li>Docker</li>
      {/* AWS */}
      <li>AWS</li>
      <li>S3</li>
      <li>CloudFront</li>
      <li>Route 53</li>
      <li>SES</li>
      <li>Lambda</li>
      {/* Other */}
      <li>HTML</li>
      <li>CSS</li>
      <li>SCSS</li>
      <li>Webpack</li>
      <li>Material UI</li>
      <li>Bootstrap</li>
    </ul>
  </div>
);

export default TechStack;
