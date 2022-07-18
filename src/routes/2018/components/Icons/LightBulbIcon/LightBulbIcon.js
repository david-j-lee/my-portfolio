import { h } from "preact";

const LightBulbIcon = () =>
  // prettier-ignore
  <div className="lightbulb-icon-animation">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 54 54">
      <g>
        <g id="Layer 1">
          <path className="line in" d=" M 21.969 42.971 L 21.969 49.991 L 24.001 49.991 L 24.001 53.007 L 29.99 53.007 L 29.99 49.991 L 32.001 49.991 L 32.001 43.096"
            fill="none" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="round"
            strokeLinecap="butt" strokeMiterlimit="4" />
          <path className="line in" d=" M 11.043 25 C 11.043 14.344 19.716 8.986 27 8.986 C 34.284 8.986 42.969 14.75 42.969 25 Q 42.969 35.25 32.001 40.375 L 32.001 42.971 L 21.969 42.971 L 21.969 40.359 Q 11.043 35.656 11.043 25 Z "
            fill="none" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="miter"
            strokeLinecap="square" strokeMiterlimit="3" />

          <path className="line in flicker" d=" M 27 13.955 C 21.701 13.955 15.953 18.307 15.953 25" fill="none" vectorEffect="scaling-stroke"
            strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="3" />
            
          <g id="Layer 2">
            <line className="line in wave" x1="12.867" y1="39.146" x2="10.012" y2="41.947" vectorEffect="scaling-stroke" strokeWidth="2"
              stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
            <line className="line in wave" x1="3.011" y1="25" x2="6.993" y2="25" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)"
              strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
            <line className="line in wave" x1="10.012" y1="8.022" x2="12.867" y2="10.839" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)"
              strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
            <line className="line in wave" x1="27" y1="1" x2="27" y2="5" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)"
              strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
            <line className="line in wave" x1="43.948" y1="8.022" x2="41.115" y2="10.839" vectorEffect="scaling-stroke" strokeWidth="2"
              stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
            <line className="line in wave" x1="47.028" y1="25" x2="51.015" y2="25" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)"
              strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
            <line className="line in wave" x1="41.115" y1="39.146" x2="43.948" y2="41.947" vectorEffect="scaling-stroke" strokeWidth="2"
              stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="4" />
          </g>
        </g>
      </g>
    </svg>
  </div>;

export default LightBulbIcon;
