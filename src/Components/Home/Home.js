import React from "react";
import "./Home.css";

import anime from "animejs";
import Typed from "typed.js";
import Waypoint from "react-waypoint";

import Logo from "../Icons/Logo/Logo";
import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";

export default class Home extends React.Component {
  constructor() {
    super();

    this.enterViewPort = this.enterViewPort.bind(this);
    this.leaveViewPort = this.leaveViewPort.bind(this);

    this.state = {
      animate: ""
    };

    this.section = "home";
    this.animeQuery = `.${this.section}-anime .in`;
    this.animeElements = undefined;
    this.animeTimelineIn = anime.timeline();
  }

  componentDidMount() {
    this.animeElements = document.querySelectorAll(
      "." + this.section + "-anime .in"
    );

    this.particles();
    this.typed();
    this.resetAnimation();
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    // this.typed.destroy();
  }

  particles() {
    // particles used for background
    const particlesJS = window.particlesJS;
    particlesJS.load("particles-js-home", "/assets/particles-home-config.json");
  }

  typed() {
    // typed used for sub heading
    const typedStrings = [
      "I love learning new technologies",
      "I enjoy solving problems",
      "I design user experiences",
      "I build functional applications"
    ];
    const typedOptions = {
      // BUG? does not show first sentence
      strings: typedStrings,
      typeSpeed: 40,
      backSpeed: 10,
      loop: true
    };
    new Typed(".sub-heading", typedOptions);
  }

  animate() {
    // start the after effects animations and
    // randomly set the delay and duration of the after effects
    this.resetAnimation();
    this.animeTimelineIn
      .add({
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
        complete: () => {
          setTimeout(() => {
            this.setState({ animate: "animated infinite bounce set-opacity-md" });
          }, 5000)
        }
      });
  }

  resetAnimation() {
    this.animeTimelineIn.pause();
    this.animeTimelineIn = anime.timeline();

    for (var i = 0; i < this.animeElements.length; i++) {
      var el = this.animeElements[i];
      el.style.fillOpacity = 0;
      el.style.opacity = 0;
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
      <div className="hero d-flex flex-column minh-100vh white">
        <div className="hero-content mx-auto my-auto container">
          <Waypoint onEnter={this.enterViewPort} onLeave={this.leaveViewPort}>
            <div className="row">
              <div className="col-md-8">
                <div className="py-5">
                  <h1 className="white">Hi, I am</h1>
                  <h1 className="accent">David Lee</h1>
                  <div className="sub-heading-wrapper ml-1">
                    <span className="sub-heading white" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 home-anime">
                <div className="logo mx-auto pt-5 pb-3">
                  <Logo />
                </div>
              </div>
            </div>
          </Waypoint>
        </div>
        <div className={this.state.animate + ' home-down-arrow'}>
          <DownArrowIcon nextSection="about" />
        </div>
        <div id="particles-js-home" className="bg-underlay" />
      </div>
    );
  }
}
