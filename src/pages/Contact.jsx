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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs
  .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  })
  .then(() => {
    notify();
  })
  .catch((error) => {
   throw error;
  });
  };
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Let’s connect before I dive into the next bug fix!"
        description=""
      />

      <form ref={form} onSubmit={sendEmail} style={{display: "flex", flexDirection: "column", width: "90%",}}>
        <label htmlFor="user_name" style={{display: "flex"}}>
          <p>Name</p>
          <p style={{color: "red"}}>*</p>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name, your fame"
          required
          id="user_name"
          autoComplete="off"
          style={{ height: "3.5em", width: "100%" , borderRadius: "0.5em", border: "0.1em solid #ccc"}}
        />
        <label htmlFor="user_email"
        style={{marginTop:" 1em", display: "flex"}}>
          <p>Email</p>
          <p style={{color: "red"}}>*</p>
        </label>
        <input
          type="email"
          name="Email"
          id="user_email"
          placeholder="Where can i reach you back?"
          required
          autoComplete="off"
          style={{height: "3.5em", width: "100%", borderRadius: "0.5em", border: "0.1em solid #ccc", }}
        />
        <label htmlFor="user_message" style={{marginTop: "1em", display: "flex"}}>
          <p>Message</p>
          <p style={{color: "red"}}>*</p>
        </label>
        <textarea name="message" placeholder="Your words, my inbox."  id="user_message" style={{height: "4em", width: "100%", borderRadius: "0.5em", border: "0.1em solid #ccc"}}/>
        <input type="submit" value="Submit" style={{marginTop:"1em", height: "3.5em", width: "100%", borderRadius: "0.5em", border: "0.1em solid #ccc", color: "white", fontSize: "1em", marginLeft:"0.2em"}} />
        <ToastContainer />
         <input type="reset" value="Reset" style={{marginTop:"1em", height: "3.5em", width: "100%", borderRadius: "0.5em", border: "0.1em solid #ccc", color: "black", fontSize: "1em", marginLeft:"0.2em", }}></input>
      </form>

       <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "2em",
                width: "100%",
              }}
            >
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
