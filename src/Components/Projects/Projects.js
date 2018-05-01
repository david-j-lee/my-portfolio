import React from "react";
import "./Projects.css";

import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";

const projects = [
  {
    src: "ptable",
    name: "PTable",
    url: "http://theptable.com",
    imageUrl: "assets/ptable.png",
    imageAlt: "PTable project image",
    description:
      "Periodic Table of Elements. Easily search for elements and see elemental states in a specific temperature.",
    role: "Sole Developer",
    tech: ["AWS Route 53", "AWS S3", "AWS SES", "Reactjs", "Reactstrap", "Sass"]
  },
  {
    src: "daebit",
    name: "Daebit",
    url: "https://daebit.com",
    imageUrl: "assets/daebit.png",
    imageAlt: "Daebit project image",
    description: "My personal playground with various applications.",
    role: "Sole Developer",
    tech: [
      "Angular 5",
      "Angular Material",
      "Asp Core 2",
      "AWS CodeStar",
      "AWS CloudFront",
      "AWS EC2 Ubuntu",
      "AWS RDS",
      "AWS Route 53",
      "AWS S3",
      "AWS SES",
      "Bootstrap 4",
      "Sass"
    ]
  },
  {
    src: "daebit-budgets",
    name: "Budgets",
    url: "https://daebit.com/budgets/about",
    imageUrl: "assets/budgets.png",
    imageAlt: "Budget project image",
    description:
      "Application within daebit. Personal financial forecasting model. Quickly plan out your revenues and expenses by day for a whole year.",
    role: "Sole Developer",
    tech: [
      "Angular 5",
      "Angular Material",
      "Asp Core 2",
      "AWS CodeStar",
      "AWS CloudFront",
      "AWS EC2 Ubuntu",
      "AWS RDS",
      "AWS Route 53",
      "AWS S3",
      "AWS SES",
      "Bootstrap 4",
      "Sass"
    ]
  },
  {
    src: "daebit-gradebooks",
    name: "Gradebooks",
    url: "https://daebit.com/gradebooks/about",
    imageUrl: "assets/gradebooks.png",
    imageAlt: "Grades project image",
    description:
      "Application within daebit. Keep track of your grades in class and perform what-if analyses on your remaining tests and assignments.",
    role: "Sole Developer",
    tech: [
      "Angular 5",
      "Angular Material",
      "Asp Core 2",
      "AWS CodeStar",
      "AWS CloudFront",
      "AWS EC2 Ubuntu",
      "AWS RDS",
      "AWS Route 53",
      "AWS S3",
      "AWS SES",
      "Bootstrap 4",
      "Sass"
    ]
  }
];

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === projects.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? projects.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = projects.map((project, i) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={project.name + i}
        >
          <div className="carousel-item-content">
            <div className="project">
              <div className="row">
                <div
                  className={`col-lg-7 project-img-container ${
                    i % 2 === 0 ? "order-lg-1" : "order-lg-2"
                  }`}
                >
                  <img src={project.imageUrl} alt={project.imageAlt} />
                </div>
                <div
                  className={`col-lg-5 ${
                    i % 2 === 0 ? "order-lg-2" : "order-lg-1"
                  }`}
                >
                  <h2 className="mt-3 mt-lg-0">{project.name}</h2>
                  <p>{project.description}</p>
                  <p>
                    {project.tech.map((string, i) => {
                      return (
                        <span key={project.name + i} className="badge">
                          {string}
                        </span>
                      );
                    })}
                  </p>
                  <a href={project.url} target="_blank">
                    <FontAwesomeIcon icon="external-link-alt" size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      );
    });
    return (
      <div
        id="projects"
        className="projects accent-bg white minh-100vh d-flex flex-column"
      >
        <div className="container my-auto py-5">
          <div className="row">
            <div className="col-md-12 text-center mb-5">
              <h1>My Recent Projects</h1>
            </div>
            <div className="col-md-12">
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators
                  className="mb-5"
                  items={projects}
                  activeIndex={activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {slides}
                <div className="carousel-control-prev" onClick={this.previous}>
                  <FontAwesomeIcon icon="chevron-left" size="lg" />
                </div>
                <div className="carousel-control-next" onClick={this.next}>
                  <FontAwesomeIcon icon="chevron-right" size="lg" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <DownArrowIcon nextSection="journey" />
      </div>
    );
  }
}
