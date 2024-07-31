import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsLoading(false);
          setIsSuccess(true);
          console.log("SUCCESS! Message sent!");
          setTimeout(() => {
            setIsSuccess(false);
          }, 2000);
        },
        (error) => {
          setIsSuccess(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={`contact ${isVisible ? "fade-in" : ""}`}>
      <h1>Get in touch</h1>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button
            type="submit"
            className={`submit-button ${isSuccess ? "success" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <FontAwesomeIcon
                  icon={faSpinner}
                  spin
                  style={{ marginRight: "8px" }}
                />
                Sending...
              </>
            ) : isSuccess ? (
              <>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ marginRight: "8px" }}
                />
                Sent!
              </>
            ) : (
              <>
                Send
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ marginLeft: "8px" }}
                />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
