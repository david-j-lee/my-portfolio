import { h } from "preact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DownArrowIcon = (nextSection) => (
  <div className="down-arrow">
    <a href={`#${nextSection}`} className="color-inherit opacity-light">
      <FontAwesomeIcon icon="chevron-down" size="2x" />
    </a>
  </div>
);

export default DownArrowIcon;
