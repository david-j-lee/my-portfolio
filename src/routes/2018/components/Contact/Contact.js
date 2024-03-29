import { h, Component } from "preact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
  componentDidMount() {
    // particles used for background
    const particlesJS = window.particlesJS;
    particlesJS.load(
      "particles-js-contact",
      "/assets/2018/particles-contact-config.json"
    );
  }

  render() {
    return (
      <div id="contact" className="contact d-flex flex-column">
        <div className="container form my-auto">
          {/* TODO: Fix contact form
           <div className="row">
            <div className="col-md-12 white text-center my-5">
              <h1>Contact Me</h1>
            </div>
            <div className="col-md-12">
              <ContactForm />
            </div>
          </div> */}
        </div>
        <div className="info accent-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12 accent-bg py-3">
                <div className="mb-0 text-center">
                  <a
                    href="https://www.linkedin.com/pub/david-lee/31/343/a62"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mx-2"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                  <a
                    href="https://stackoverflow.com/users/6535663/david-lee?tab=profile"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mx-2"
                  >
                    <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
                  </a>
                  <a
                    href="https://github.com/david-j-lee"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mx-2"
                  >
                    <FontAwesomeIcon icon={["fab", "github-alt"]} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-js-contact" className="bg-underlay" />
      </div>
    );
  }
}
