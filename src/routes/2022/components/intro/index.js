import { h } from "preact";
import style from "./style.scss";

const Intro = () => (
  <div>
    <div className={style.header}>
      {/* TODO: Add picture once i have one */}
      {/* <div className={style.image}></div> */}
      <h1>Hi, I am David Lee</h1>
    </div>
    <p>
      I design, build and deploy applications. I am a{" "}
      <b>full-stack developer</b>. Based in <b>Los Angeles, California</b> and
      ready to solve some problems with code.
    </p>
  </div>
);

export default Intro;
