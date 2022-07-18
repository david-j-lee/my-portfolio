import { h, Component } from "preact";

import anime from "animejs";
import Waypoint from "../../utils/waypoint";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";


// https://webdesign.tutsplus.com/tutorials/building-a-horizontal-timeline-with-css-and-javascript--cms-28378

export default class Journey extends Component {
  constructor() {
    super();
    this.enterViewPort = this.enterViewPort.bind(this);
    this.leaveViewPort = this.leaveViewPort.bind(this);

    this.section = "journey";
    this.animeQuery = `.${this.section}-anime .in`;
    this.animeElements = undefined;
    this.animeTimelineIn = anime.timeline();
    this.animeLoops = [];

    this.timeline = undefined;
    this.elH = undefined;
    this.arrows = undefined;
    this.arrowPrev = undefined;
    this.arrowNext = undefined;
    this.firstItem = undefined;
    this.lastItem = undefined;
    this.offset = 0;
    this.disabledClass = "disabled";
  }

  componentDidMount() {
    this.timeline = document.querySelector(".timeline ol");
    this.elH = document.querySelectorAll(".timeline li > div");
    this.arrows = document.querySelectorAll(".timeline .arrows .arrow");
    this.arrowPrev = document.querySelector(".timeline .arrows .arrow__prev");
    this.arrowNext = document.querySelector(".timeline .arrows .arrow__next");
    this.firstItem = document.querySelector(".timeline li:first-child");
    this.lastItem = document.querySelector(".timeline li:last-child");

    // this.setEqualHeights(this.elH);

    this.animeElements = document.querySelectorAll(this.animeQuery);
    this.resetAnimation();
  }

  setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  setBtnState(el, flag) {
    if (flag) {
      el.classList.add(this.disabledClass);
    } else if (el.classList.contains(this.disabledClass)) {
      el.classList.remove(this.disabledClass);
    }
  }

  arrow(direction) {
    if (
      (direction === "left" && !this.isElementInViewport(this.firstItem)) ||
      (direction === "right" && !this.isElementInViewport(this.lastItem))
    ) {
      const tl = document.querySelector(".timeline ol");
      const values = this.offset + (direction === "left" ? 280 : -280);
      this.offset = values;
      tl.style.transform = `translateX(${values}px)`;
    }
  }

  animate() {
    // start the after effects animations and
    // randomly set the delay and duration of the after effects
    this.resetAnimation();
    this.animeTimelineIn
      .add({
        targets: `${this.animeQuery}.dot`,
        backgroundColor: {
          value: "#333",
          duration: 250,
          delay(el, i) {
            return 100 + i * 100;
          },
          easing: "easeOutQuart",
        },
      })
      .add({
        targets: `${this.animeQuery}.line`,
        backgroundColor: {
          value: "rgba(0, 0, 0, 0.5)",
          duration: 250,
          delay(el, i) {
            return 100 + i * 100;
          },
          easing: "easeOutQuart",
        },
      })
      .add({
        targets: `${this.animeQuery}.text`,
        opacity: {
          value: 1,
          duration: 250,
          delay(el, i) {
            return 100 + i * 100;
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
      targets: `${this.animeQuery}.dot`,
      backgroundColor: {
        value: "transparent",
        duration: anime.random(400, 500),
        delay: anime.random(200, 250),
      },
    });
  }

  resetAnimation() {
    this.animeTimelineIn.pause();
    this.animeTimelineIn = anime.timeline();

    for (let i = 0; i < this.animeLoops.length; i++) {
      this.animeLoops[i].pause();
      this.animeLoops[i] = anime.timeline();
    }

    for (let e = 0; e < this.animeElements.length; e++) {
      let el = this.animeElements[e];
      // reset intro animations
      if (el.classList.contains("text")) {
        el.style.opacity = 0;
      }
      if (!el.classList.contains("text")) {
        el.style.backgroundColor = "transparent";
      }
      el.style.fillOpacity = 0;
      el.style.strokeDashoffset = anime.setDashoffset(el);
    }
  }

  leftArrow() {
    this.arrow("left");
  }

  rightArrow() {
    this.arrow("right");
  }

  enterViewPort() {
    this.animate();
  }

  leaveViewPort() {
    this.resetAnimation();
  }

  render() {
    return (
      <div id="journey" className="journey minh-100vh d-flex flex-column">
        <Waypoint onEnter={this.enterViewPort} onLeave={this.leaveViewPort}>
          <div className="container-fluid my-auto py-5">
            <div className="row">
              <div className="col-md-12 text-center mb-5">
                <h1>My Journey</h1>
              </div>
              <div className="col-md-12 text-center">
                <div className="timeline journey-anime">
                  <ol>
                    <li>
                      <div className="in text">
                        <small>Aug 2010 - Dec 2015</small>
                        <h5>California State University, Fullerton</h5>
                        <p>B.A. Accounting and Information Systems</p>
                        <small>Dean's Honors List: Fall 2010 & Fall 2014</small>
                      </div>
                      <span className="in line" />
                      <span className="in dot" />
                    </li>
                    <li>
                      <div className="in text">
                        <small>Aug 2011 - Nov 2015</small>
                        <h5>Spencer N Enterprises</h5>
                        <h6>Cost Accountant</h6>
                        <p>
                          Cost Accounting, Financial Reporting and Financial
                          Forecasting
                          {/* Did Accounts Payable for a year and then Accounts
                          Receivable for about the same amount of time. For my
                          last two years I did Cost Accounting and Financial
                          Reporting. During those two years I had my first
                          introduction to programming and picked up a new tool,
                          SQL. */}
                        </p>
                      </div>
                      <span className="in line" />
                      <span className="in dot" />
                    </li>
                    {/* <li>
                      <div className="in text">
                        <small>Jan 2014 - May 2014</small>
                        <h5>ISDS 309 - Introduction to Programming</h5>
                        <p>
                          After experiencing how useful and fun SQL was in my
                          full time position at Spencers, I decided to do a
                          joint major and include Information Systems into my
                          degree. This was my first programming class and we
                          built console and WinForms applications with C#.
                        </p>
                      </div>
                      <span className="in line" />
                      <span className="in dot" />
                    </li> */}
                    {/* <li>
                      <div className="in text">
                        <small>Aug 2014 - Dec 2014</small>
                        <h5>
                          ISDS 411 - Business Applications using Web
                          Technologies
                        </h5>
                        <p>
                          Building Desktop applications was amazing, but I knew
                          the next step for me was web development. Although
                          this class was not required for my degree and it would
                          add another semester, I knew this was something I had
                          to do. We built ASP.NET Web Forms applications with
                          C#.
                        </p>
                      </div>
                      <span className="in line" />
                      <span className="in dot" />
                    </li> */}
                    <li>
                      <div className="in text">
                        <small>Dec 2015 to Present</small>
                        <h5>Orchid Orthopedics</h5>
                        <h6>Senior Financial Analyst</h6>
                        <p>
                          Financial Analysis, Financial Forecasting, Report
                          Writing and Dashboard Development
                          {/* I have been working on developing tools using
                          information technologies to provide key data to
                          management and operations. Some of the technologies I
                          have been using include WPF MVVM, ASP.NET Core,
                          BitBucket, SQL, Power Query, Power View and Power BI. */}
                        </p>
                      </div>
                      <span className="in line" />
                      <span className="in dot" />
                    </li>
                    {/* <li>
                      <div className="in text">
                        <small>Jan 2018</small>
                        <h5>Venti</h5>
                        <p>
                          I decided to put together a personal project of mine
                          to show case some of the tech I have learned. This web
                          application is built with Angular 4 (TypeScript),
                          ASP.NET Core 2 (C#), MS SQL Server, Bootstrap 4,
                          Angular Material and SASS. It currently features two
                          tools, a grade book and financial forecaster.
                        </p>
                      </div>
                      <span className="in line" />
                      <span className="in dot" />
                    </li> */}
                    {/* <li className="border-left-transparent">
                      <div className="in text">
                        <small>Tomorrow</small>
                        <h5>Our Next Project!</h5>
                        <p>
                          I love writing code and building cool applications. If
                          you have a need and I have the time we can make some
                          magic happen.
                        </p>
                      </div>
                      <span className="in line" />
                      <span className="in dot" />
                    </li> */}
                    <li>
                      <span className="in line" />
                    </li>
                  </ol>
                  <div className="arrows">
                    <button
                      className="arrow arrow__prev btn btn-accent mx-3 d-none d-md-inline"
                      onClick={() => this.leftArrow()}
                    >
                      <FontAwesomeIcon icon="chevron-left" size="1x" />
                    </button>
                    <a
                      href="https://drive.google.com/open?id=1SVRGIaYBfGgVjlWSiAxP59CaGUe0bMeM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent my-3"
                    >
                      Resumé
                    </a>
                    <button
                      className="arrow arrow__next btn btn-accent mx-3 d-none d-md-inline"
                      onClick={() => this.rightArrow()}
                    >
                      <FontAwesomeIcon icon="chevron-right" size="1x" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Waypoint>
        <DownArrowIcon nextSection="contact" />
      </div>
    );
  }
}
