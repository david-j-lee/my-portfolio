import React from "react";
import "./Skills.css";

import anime from "animejs";
import Waypoint from "react-waypoint";

import BrowserIcon from "../Icons/BrowserIcon/BrowserIcon";
import ServerIcon from "../Icons/ServerIcon/ServerIcon";
import DesktopIcon from "../Icons/DesktopIcon/DesktopIcon";
import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";

export default class Skills extends React.Component {
  constructor() {
    super();

    this.enterViewPort = this.enterViewPort.bind(this);
    this.leaveViewPort = this.leaveViewPort.bind(this);

    this.section = "skills";
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
        delay: function(el, i, t) {
          return 500 + i * 100;
        },
        easing: "easeOutQuart"
      },
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 600,
        delay: function(el, i, t) {
          return 500 + i * 100;
        },
        easing: "easeOutQuart"
      },
      fillOpacity: {
        value: 1,
        duration: 600,
        delay: function(el, i, t) {
          return 500 + i * 100;
        },
        easing: "easeOutQuart"
      },
      complete: () => {
        this.runAnimeLoops();
      }
    });
  }

  runAnimeLoops() {
    if (this.animeLoops[0]) this.animeLoops[0].pause();
    this.animeLoops[0] = anime.timeline({ loop: true });
    this.animeLoops[0].add({
      targets: `${this.animeQuery}.flash`,
      opacity: 0,
      duration: 500,
      delay: 250
    });

    if (this.animeLoops[1]) this.animeLoops[1].pause();
    this.animeLoops[1] = anime.timeline({ loop: true });
    this.animeLoops[1].add({
      targets: `${this.animeQuery}.flicker`,
      loop: true,
      opacity: [
        { value: 0, duration: 100 },
        { value: 1, duration: 100 },
        { value: 0, duration: 100 },
        { value: 1, duration: 100 }
      ],
      delay: 500,
      easing: "easeOutCubic"
    });
  }

  resetAnimation() {
    this.animeTimelineIn.pause();
    this.animeTimelineIn = anime.timeline();

    for (var i = 0; i < this.animeLoops.length; i++) {
      this.animeLoops[i].pause();
      this.animeLoops[i] = anime.timeline();
    }

    for (var e = 0; e < this.animeElements.length; e++) {
      var el = this.animeElements[e];
      // reset intro animations
      el.style.opacity = 0;
      el.style.fillOpacity = 0;
      el.style.strokeDashoffset = anime.setDashoffset(el);
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
      <div id="skills" className="skills minh-100vh d-flex flex-column">
        <Waypoint
          onEnter={this.enterViewPort}
          onLeave={this.leaveViewPort}
          bottomOffset="25%"
        >
          <div className="container my-auto py-5">
            <div className="row skills-anime cards">
              <div className="col-md-12 dark text-center mb-5">
                <h1>What I am Learning</h1>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <BrowserIcon />
                  <div className="card-body">
                    <h3 className="card-title">Front End</h3>
                    <h6 className="card-subtitle text-muted">Languages</h6>
                    <ul className="tag-list">
                      <li>TypeScript</li>
                      <li>JavaScript</li>
                      <li>SCSS</li>
                    </ul>
                    <h6 className="card-subtitle text-muted">Frameworks</h6>
                    <ul className="tag-list">
                      <li>Angular 2+</li>
                    </ul>
                    <h6 className="card-subtitle text-muted">Libraries</h6>
                    <ul className="tag-list mb-0">
                      <li>Bootstrap 4</li>
                      <li>Angular Material</li>
                      <li>Reactjs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <ServerIcon className="card-icon" />
                  <div className="card-body">
                    <h3 className="card-title">Back End</h3>
                    <h6 className="card-subtitle text-muted">Languages</h6>
                    <ul className="tag-list">
                      <li>C#</li>
                      <li>SQL</li>
                    </ul>
                    <h6 className="card-subtitle text-muted">Frameworks</h6>
                    <ul className="tag-list">
                      <li>ASP.NET MVC</li>
                      <li>ASP.NET Core</li>
                    </ul>
                    <h6 className="card-subtitle text-muted">Hosting</h6>
                    <ul className="tag-list mb-0">
                      <li>AWS</li>
                      <li>Azure</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <DesktopIcon className="card-icon" />
                  <div className="card-body">
                    <h3 className="card-title">Desktop</h3>
                    <h6 className="card-subtitle text-muted">Frameworks</h6>
                    <ul className="tag-list mb-0">
                      <li>ASP.NET WPF MVVM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Waypoint>
        <DownArrowIcon nextSection="projects" />
      </div>
    );
  }
}
