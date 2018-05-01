import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default class DownArrowIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="down-arrow">
        <a href={'#' + this.props.nextSection} className="color-inherit opacity-light">
          <FontAwesomeIcon icon="chevron-down" size="2x" />
        </a>
      </div>
    );
  }
}
