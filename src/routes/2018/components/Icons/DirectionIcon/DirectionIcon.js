import { h } from "preact";

const DirectionIcon = () =>
  // prettier-ignore
  <div className="direction-icon-animation">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
      // style="isolation:isolate" 
      viewBox="0 0 60 60">
      <g id="Top Sign">
        <path className="line in flicker" d=" M 10.118 3.962 L 48.5 3.962 L 56.614 11.314 C 57.023 11.685 57.022 12.286 56.613 12.656 L 48.5 19.983 L 10.012 19.983 C 8.723 19.983 7.676 18.936 7.676 17.647 L 7.676 6.404 C 7.676 5.056 8.77 3.962 10.118 3.962 Z "
          fill="none" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="miter"
          strokeLinecap="square" strokeMiterlimit="3" />
      </g>
      <g id="Bottom Sign">
        <path className="line in" d=" M 50.255 24.063 L 11.405 24.063 L 3.278 31.31 C 2.866 31.677 2.865 32.275 3.275 32.644 L 11.405 39.965 L 50.362 40.077 C 51.651 40.081 52.697 39.037 52.697 37.748 L 52.697 26.505 C 52.697 25.157 51.603 24.063 50.255 24.063 Z "
          fill="none" vectorEffect="scaling-stroke" strokeWidth="2" stroke="rgb(255,255,255)" strokeLinejoin="miter"
          strokeLinecap="square" strokeMiterlimit="3" />
      </g>
      <g id="Pole">
        <path className="line in" d=" M 28.659 1.109 Q 28.661 0.326 28.659 3.962" fill="none" vectorEffect="scaling-stroke" strokeWidth="2"
          stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3" />
        <line className="line in" x1="28.659" y1="19.983" x2="28.659" y2="24.063" fill="none" vectorEffect="scaling-stroke" strokeWidth="2"
          stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3" />
        <path className="line in" d=" M 28.66 39.965 Q 28.672 64.218 28.659 57.486" fill="none" vectorEffect="scaling-stroke" strokeWidth="2"
          stroke="rgb(255,255,255)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3" />
      </g>
    </svg>
  </div>;

export default DirectionIcon;
