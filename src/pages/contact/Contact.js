import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="Contact">
      <div className="contact-minimal-container" data-aos="fade-up">
        <h2 className="contact-minimal-title">Contact Me</h2>
        <p className="contact-minimal-subtext">
          <span style={{fontFamily: 'monospace'}}>[initials].samirchar[at]gmail[dot]com</span><br /><br />
          <span style={{fontStyle: 'italic'}}>...or use the form below.</span>
        </p>
        <form className="contact-minimal-form" action="https://formspree.io/f/mjkovwrv" method="POST">
          <input type="text" name="name" placeholder="Your Name *" required className="contact-minimal-input" />
          <input type="email" name="email" placeholder="Your Email *" required className="contact-minimal-input" />
          <input type="text" name="phone" placeholder="Your Phone" className="contact-minimal-input contact-minimal-input-span" />
          <textarea name="message" placeholder="Your Message *" required rows={5} className="contact-minimal-textarea contact-minimal-input-span"></textarea>
          <button type="submit" className="contact-minimal-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
