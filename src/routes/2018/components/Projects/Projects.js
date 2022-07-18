import { h } from "preact";

import { Link } from 'preact-router/match';

import DownArrowIcon from "../Icons/DownArrowIcon/DownArrowIcon";

import projects from "../../data/json/projects.json";

const Projects = () => {
  const slides = projects.map((project, i) => {
    return (
      <div key={i} className="project-tiled col-md-3">
        <Link href={`/2018/project/${project.src}`} className="project-tiled-link">
          <h2 className="mt-3 mt-lg-0 project-tiled-name">{project.name}</h2>
          <div
            className="image"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          <div className="dark-overlay" />
        </Link>
      </div>
    );
  });
  return (
    <div
      id="projects"
      className="projects-tiled accent-bg white minh-100vh d-flex flex-column"
    >
      <div className="container my-auto py-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h1>My Recent Projects</h1>
          </div>
          <div className="col-md-12">
            <div className="row">{slides}</div>
          </div>
        </div>
      </div>
      <DownArrowIcon nextSection="journey" />
    </div>
  );
};

export default Projects;
