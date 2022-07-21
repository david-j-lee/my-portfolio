import { h, Component } from "preact";

import anime from "animejs";
import Waypoint from "../../utils/waypoint";

import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";
import PlayVideoIcon from "../Icons/PlayVideoIcon/PlayVideoIcon";
import DirectionIcon from "../Icons/DirectionIcon/DirectionIcon";
import LightBulbIcon from "../Icons/LightBulbIcon/LightBulbIcon";
import EyeIcon from "../Icons/EyeIcon/EyeIcon";

export default class About extends Component {
  constructor() {
    super();

    this.enterViewPort = this.enterViewPort.bind(this);
    this.leaveViewPort = this.leaveViewPort.bind(this);

    this.section = "about";
    this.animeQuery = `.${this.section}-anime .in`;
    this.animeElements = undefined;
    this.animeTimelineIn = anime.timeline();
    this.animeLoops = [];
  }

  componentDidMount() {
    this.animeElements = document.querySelectorAll(this.animeQuery);
    this.resetAnimation();
  }

  animate() {
    // start the after effects animations and
    // randomly set the delay and duration of the after effects
    this.resetAnimation();
    this.animeTimelineIn.add({
      targets: this.animeQuery,
      opacity: {
        value: [0, 1],
        duration: 600,
        delay(el, i) {
          return 500 + i * 100;
        },
        easing: "easeOutQuart",
      },
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 600,
        delay(el, i) {
          return 500 + i * 100;
        },
        easing: "easeOutQuart",
      },
      complete: () => {
        this.runAnimeLoops();
      },
    });
  }

  runAnimeLoops() {
    if (this.animeLoops[0]) this.animeLoops[0].pause();
    this.animeLoops[0] = anime.timeline({ loop: true });
    this.animeLoops[0].add({
      targets: `${this.animeQuery}.flash`,
      opacity: {
        value: 0.7,
        duration: anime.random(400, 500),
        delay: anime.random(200, 250),
      },
    });

    if (this.animeLoops[1]) this.animeLoops[1].pause();
    this.animeLoops[1] = anime.timeline({ loop: true });
    this.animeLoops[1].add({
      targets: `${this.animeQuery}.flicker`,
      opacity: [
        { value: 0.7, duration: 1000 },
        { value: 1, duration: 1000 },
        { value: 0.7, duration: 1000 },
        { value: 1, duration: 1000 },
      ],
      delay: 500,
      easing: "easeOutCubic",
    });

    if (this.animeLoops[2]) this.animeLoops[2].pause();
    this.animeLoops[2] = anime.timeline({ loop: true });
    this.animeLoops[2].add({
      targets: `${this.animeQuery}.wave`,
      opacity: {
        value: 0.7,
        duration: anime.random(400, 500),
        delay(el, i) {
          return anime.random(200, 250) + i * 100;
        },
      },
      delay: 500,
    });
  }

  resetAnimation() {
    this.animeTimelineIn.pause();
    this.animeTimelineIn = anime.timeline();

    if (this.animeLoops) {
      for (let i = 0; i < this.animeLoops.length; i++) {
        this.animeLoops[i].pause();
        this.animeLoops[i] = anime.timeline();
      }
    }

    if (this.animeElements) {
      for (let e = 0; e < this.animeElements.length; e++) {
        let el = this.animeElements[e];
        // reset intro animations
        el.style.opacity = 1;
        el.style.fillOpacity = 0;
        el.style.strokeDashoffset = anime.setDashoffset(el);
      }
    }
  }

  enterViewPort() {
    this.animate();
  }

  leaveViewPort() {
    this.resetAnimation();
  }

  render() {
    return (
      <div
        id="about"
        className="about main-bg white minh-100vh d-flex flex-column"
      >
        <Waypoint
          onEnter={this.enterViewPort}
          onLeave={this.leaveViewPort}
          bottomOffset="25%"
        >
          <div className="container my-auto py-5">
            <div className="row about-anime">
              <div className="col-md-6 order-md-4 mt-5 my-md-5">
                <h1>
                  I design, build and deploy applications. I am a{" "}
                  <span className="nowrap">full-stack</span> developer.
                </h1>
              </div>
              <div className="col-md-6 order-md-5 mb-5 my-md-5">
                <p>
                  I develop solution based applications with simple and
                  intuitive user interfaces. I am based in Orange County,
                  California and ready to solve some problems with code.
                </p>
              </div>
              <div className="col-md-3 col-6 order-md-0">
                <div className="text-center">
                  <DirectionIcon />
                  <h2>Critical Thinker</h2>
                </div>
              </div>
              <div className="col-md-3 col-6 order-md-1">
                <div className="text-center">
                  <LightBulbIcon />
                  <h2>Inquisitive</h2>
                </div>
              </div>
              <div className="col-md-3 col-6 order-md-2">
                <div className="text-center">
                  <PlayVideoIcon />
                  <h2>Quick Learner</h2>
                </div>
              </div>
              <div className="col-md-3 col-6 order-md-3">
                <div className="text-center">
                  <EyeIcon />
                  <h2>Perceptive</h2>
                </div>
              </div>
            </div>
          </div>
        </Waypoint>
        <DownArrowIcon nextSection="skills" />
      </div>
    );
  }
}
