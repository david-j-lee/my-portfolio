import { h } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import style from "./style.scss";

const Projects = () => {
  const projects = [
    {
      title: "Bloop.",
      description:
        "Mobile game about mixing and matching colors. Available now on Apple store and Google Play store.",
      link: "https://roguewavegamestudios.com/bloop",
    },
    {
      title: "Electron Inject CSS",
      description:
        "Node CLI that lets you inject CSS into Electron applications",
      link: "https://www.npmjs.com/package/electron-inject-css",
      github: "https://github.com/david-j-lee/electron-inject-css",
    },
    {
      title: "Gong Chat",
      description: "A highly customizable cross-platform XMPP chat client",
      link: "https://gongchat.github.io/",
      github: "https://github.com/gongchat/gong",
    },

    {
      title: "ONI Calculator",
      description: "Resource management tool for the game Oxygen not Included",
      link: "https://onicalc.com/",
      github: "https://github.com/david-j-lee/oni-calc",
    },
    {
      title: "All the Atoms",
      description: "Periodic table of elements",
      link: "https://alltheatoms.com/",
      github: "https://github.com/david-j-lee/all-the-atoms",
    },
    {
      title: "Finance 365",
      description: "A personal financial planner for the next 365 days",
      github: "https://github.com/david-j-lee/fin365",
    },
    {
      title: "Picture in Picture",
      description: "Updated and re-designed version of PiP-Tool",
      github: "https://github.com/david-j-lee/picture-in-picture",
    },
    {
      title: "GitHub Dark Color Theme",
      description: "VS Code color theme that matches the GitHub website",
      link: "https://marketplace.visualstudio.com/items?itemName=david-j-lee.github-dark-color-theme",
      github: "https://github.com/david-j-lee/vscode-github-dark-theme",
    },
  ];

  return (
    <div class={style.projects}>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project}>
          <h3>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title} <FontAwesomeIcon icon={faExternalLink} />
              </a>
            ) : (
              project.title
            )}
            {project.github && (
              <>
                {" "}
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </>
            )}
          </h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
