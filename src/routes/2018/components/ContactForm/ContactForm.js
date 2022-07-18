import { h, Component } from "preact";

// import Recaptcha from "react-recaptcha";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendAnother = this.sendAnother.bind(this);
  }

  componentDidMount() {
    const particlesJS = window.particlesJS;
    particlesJS.load(
      "particles-js-contact",
      "/assets/2018/particles-contact-config.json"
    );
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const object = {};
    data.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    fetch("https://api.daebit.com/api/email/contact", {
      headers: new Headers({ "Content-Type": "application/json" }),
      mode: "cors",
      method: "POST",
      body: json,
    })
      .then((res) => {
        if (res.ok) {
          this.showSuccess();
        } else {
          this.showError();
        }
      })
      .catch(() => {
        this.showError();
      });
  }

  sendAnother() {
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("success-msg");
    const message = document.getElementById("message");
    form.classList.remove("d-none");
    successMsg.classList.add("d-none");
    message.value = null;
    message.focus();
  }

  showSuccess() {
    const form = document.getElementById("contact-form");
    const successMsg = document.getElementById("success-msg");
    form.classList.add("d-none");
    successMsg.classList.remove("d-none");
  }

  showError() {
    const form = document.getElementById("contact-form");
    const errorMsg = document.getElementById("error-msg");
    form.classList.add("d-none");
    errorMsg.classList.remove("d-none");
  }

  render() {
    return (
      <div>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit}
          className="form mx-auto pb-5"
        >
          <div className="form-group">
            <label htmlFor="name" className="d-none">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="d-none">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="d-none">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="d-none">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              placeholder="Message"
              required
            />
          </div>
          <button id="contact-submit" type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
        <div id="success-msg" className="alert alert-success d-none">
          <h1 className="h3">Thank you for your message</h1>
          <p>I will get back to you as soon as possible</p>
          <button
            onClick={this.sendAnother}
            className="btn btn-outline-success"
          >
            Send Another
          </button>
        </div>
        <div id="error-msg" className="alert alert-danger d-none">
          I am currently having trouble receiving your message. Please try again
          later.
        </div>
      </div>
    );
  }
}
