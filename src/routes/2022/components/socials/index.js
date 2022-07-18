import { h } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import style from "./style.scss";

const Socials = () => (
  <div>
    <ul className={style.socialsListing}>
      <li>
        <a
          href="https://github.com/david-j-lee"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://stackoverflow.com/users/6535663/david-lee?tab=profile"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/david-j-lee/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  </div>
);

export default Socials;
