import { h } from "preact";
import style from "./style.scss";

const Experience = () => {
  const yearsOfExperience = new Date().getFullYear() - 2013;
  return (
    <div>
      <div className={style["experience-section"]}>
        <div className={`${style.section} ${style["years-of-experience"]}`}>
          <span className={style.years}>{yearsOfExperience}</span>
          <div>
            <div>years in</div>
            <div>software development</div>
          </div>
        </div>
        <div className={style.divider} />
        <div className={style.section}>
          <div>Currently a <b>Lead Developer</b></div>
          <div>at <b>TechEmpower</b></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
