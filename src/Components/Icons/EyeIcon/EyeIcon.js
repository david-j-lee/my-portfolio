import React from "react";

export default class EyeIcon extends React.Component {
  render() {
    return (
      // pretty-ignore
      <div className="eye-icon-animation">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 59 59">
          <g>
            <g id="Layer 1">
              <path className="line in" d=" M 1.414 29.401 Q 7.032 23.625 10.752 20.239 C 14.473 16.854 22.588 13.394 29.599 13.617 C 36.609 13.84 41.706 15.403 46.617 19.235 Q 51.528 23.067 57.634 29.665 Q 49.232 38.392 44.887 41.117 C 40.541 43.841 35.358 45.416 29.76 45.436 C 23.029 45.46 16.742 43.232 11.943 39.4 Q 7.143 35.568 1.414 29.401 Z "
                fill="none" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="miter"
                strokeLinecap="butt" strokeMiterlimit="4" />
              <path className="line in" d=" M 17.416 29.5 C 17.416 22.831 22.831 17.416 29.5 17.416 C 36.169 17.416 41.584 22.831 41.584 29.5 C 41.584 36.169 36.169 41.584 29.5 41.584 C 22.831 41.584 17.416 36.169 17.416 29.5 Z "
                fill="none" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="miter"
                strokeLinecap="square" strokeMiterlimit="3" />
              <path className="line in animate flash infinite" d=" M 28.475 22.494 C 24.984 22.494 22.496 25.67 22.496 28.473" fill="none" vectorEffect="scaling-stroke"
                strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
