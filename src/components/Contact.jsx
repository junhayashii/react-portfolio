import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS! Message sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1>Get in touch</h1>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit" className="submit-button">
            Send{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginLeft: "8px" }}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
