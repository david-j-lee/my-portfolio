import { Component } from "preact";

import { Link } from "preact-router/match";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import projects from "../../data/json/projects.json";

export default class Project extends Component {
  state = {
    project: {},
  };

  componentWillMount() {
    let project = projects.filter((project) => {
      return project.src === this.props.matches.id;
    });
    project = project.length > 0 ? project[0] : {};
    this.setState({ project });
  }

  render() {
    const { project } = this.state;

    return (
      <div>
        <div className="navbar">
          <div className="navbar-nav mx-auto">
            <div className="nav-item">
              <Link href="/2018#projects" className="nav-link">
                <FontAwesomeIcon icon="arrow-left" /> Take me back
              </Link>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={project.imageUrl} alt={project.imageAlt} />
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <h4>Technologies</h4>
          <p>
            {project.tech.map((string, i) => {
              return (
                <span key={project.name + i} className="badge">
                  {string}
                </span>
              );
            })}
          </p>
          <a
            href={project.url}
            target="_blank"
            className="mr-3 mb-1"
            rel="noreferrer"
          >
            <button className="btn btn-default">
              <FontAwesomeIcon icon="external-link-alt" /> View the Site
            </button>
          </a>
          {project.gitHubUrl !== undefined && (
            <a
              href={project.gitHubUrl}
              target="_blank"
              className="mr-3 mb-1"
              rel="noreferrer"
            >
              <button className="btn btn-default">
                <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
              </button>
            </a>
          )}
        </div>
      </div>
    );
  }
}
