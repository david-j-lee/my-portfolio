import React from 'react';
import "./Project.css";

import { HashLink as Link } from 'react-router-hash-link';

import projects from '../../assets/json/projects.json';

export default class Project extends React.Component {
  state = {
    project: {}
  }

  componentWillMount() {
    let project = projects
      .filter(project => { return project.src === this.props.match.params.id });
    project = project.length > 0 ? project[0] : {};
    this.setState({ project: project });
  }

  render() {
    const { project } = this.state;

    return (
      <div className="project">
        <img src={'/' + project.imageUrl} alt={project.imageAlt} />
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
        <Link to="/#projects" className="mr-3 mb-1">
          <button className="btn btn-default">
            Return to Home
          </button>
        </Link>
        <a href={project.url} target="_blank" className="mr-3 mb-1">
          <button className="btn btn-default">
            View the Site
          </button>
        </a>
        {project.gitHubUrl !== undefined &&
          <a href={project.gitHubUrl} target="_blank" className="mr-3 mb-1">
            <button className="btn btn-default">
              View the GitHub
            </button>
          </a>
        }
      </div>
    )
  }
}
