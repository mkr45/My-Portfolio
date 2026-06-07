import PageHeader from "../components/PageHeader";
import { useRef } from "react";
import NavigationBtn from "../components/Navigation-Btn";
import NavigationBtnPrev from "../components/Navigation-Btn-Prev";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

export default function Contact() {
  const notify = () => {
    toast.success("Message sent successfully", {
      position: "top-right"
    });
  };

  const notifyError = () => {
    toast.error("Something went wrong. Please try again.", {
      position: "top-right"
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        notify();
        form.current?.reset();
      })
      .catch(() => {
        notifyError();
      });
  };

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Let’s talk about ideas, builds, or the next role."
        description="If you want to collaborate, discuss a project, or just reach out, this page should feel as polished and easy as the rest of the site."
      />

      <section className="contact-shell">
        <article className="contact-panel contact-panel-intro">
          <span className="contact-kicker">Reach out</span>
          <h3>Open to product conversations, collaborations, and opportunities</h3>
          <p>
            Whether it’s a project idea, a frontend role, or a chance to build
            something meaningful, I’d love to hear what you’re working on.
          </p>

          <div className="contact-points">
            <div className="contact-point">
              <strong>Email</strong>
              <span>mayankkr4554@gmail.com</span>
            </div>
            <div className="contact-point">
              <strong>Location</strong>
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="contact-point">
              <strong>Best for</strong>
              <span>Frontend roles, product work, and collaborative builds</span>
            </div>
          </div>
        </article>

        <form ref={form} onSubmit={sendEmail} className="contact-panel contact-form">
          <div className="field-group">
            <label htmlFor="user_name" className="contact-label">
              Name <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              id="user_name"
              autoComplete="off"
              className="contact-input"
            />
          </div>

          <div className="field-group">
            <label htmlFor="user_email" className="contact-label">
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="Email"
              id="user_email"
              placeholder="Where should I reply?"
              required
              autoComplete="off"
              className="contact-input"
            />
          </div>

          <div className="field-group">
            <label htmlFor="user_message" className="contact-label">
              Message <span>*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell me a little about what you have in mind."
              id="user_message"
              required
              className="contact-textarea"
            />
          </div>

          <div className="contact-actions">
            <input type="submit" value="Send message" className="contact-submit" />
            <input type="reset" value="Clear form" className="contact-reset" />
          </div>
        </form>
      </section>

      <ToastContainer />

      <div className="contact-nav">
        <Link to="/education" style={{ textDecoration: "none" }}>
          <NavigationBtnPrev text="Education" />
        </Link>
        <Link to="/stats" style={{ textDecoration: "none" }}>
          <NavigationBtn text="Stats" />
        </Link>
      </div>
    </>
  );
}
