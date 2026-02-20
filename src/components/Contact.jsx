import React from "react";
import SectionHeading from "./Headings";
import "./contact.css";
const Contact = React.memo(({contactTitle}) => {
  return (
    <footer className="footer">
      <main className="footer-container" id="footer">

        <div className="footer-info">
          <p className="tagline">Work together, grow together</p>

          <ul className="contact-details">
            <li><a href="tel: +917043691404" aria-label="contact number">📞 +91 70436 91404</a></li>
            <li><a href="mailto:debashish.sahu.0222@gmail.com?subject=Hiring%20Inquiry&body=Hi," target="_blank" aria-label="Email address">📧 debashish.sahu.0222@gmail.com</a></li>
          </ul>

          <div className="socials">
            <a href="https://wa.me/917043691404?text=Hi,%20I%20am%20" target="_blank" aria-label="whatsapp"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/debashish-sahu-cs/" target="_blank" aria-label="linked-in" ><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Debashish-Sahu-cs" target="_blank" aria-label="github" ><i className="fab fa-github"></i></a>
          </div>
        </div>
          
        <div className="footer-contact" id="contact">
            <SectionHeading sectionHeader={contactTitle} />
          <form className="contact-form" action="https://formspree.io/f/mrbobggv" method="POST">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                aria-label="Name textbox"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                aria-label="email textbox"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
                aria-label="email textbox"
                required
              ></textarea>
            </div>
            <button type="submit" name="submit" className="btn-send" aria-label="send button">
              Send
            </button>
          </form>
        </div>
      </main>
      

      <div className="footer-bottom">
        <p>Thanks for visiting</p>
        <p>{new Date().getFullYear()} © All rights reserved. Designed by Debashish</p>
      </div>
    </footer>
  );
});

export default Contact;