import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="contact-form-section bg-night">
        <div className="contact-text">
          <h2>
            Let's make <br />
            something move!
          </h2>
          <p>
            I’m seeking out opportunities to collaborate with valuable
            companies, creative agencies, innovative individuals. <br />
            Bring my collaborative motion design to the screen where we can work
            together to solve communication problems in a way that optimizes any
            kind of bussiness in an effective and attractive way. <br />
            <br />
            Let me know what you need by filling in this quick website form.‍
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="basic-info">
              <div className="name-form">
                <label>Your Name</label>
                <input placeholder="Name" type="text" />
              </div>
              <div className="email-form">
                <label>Email Address</label>
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="message-form">
              <label>Your Message</label>
              <textarea
                className="message-area"
                rows="3"
                placeholder="Hi! We need your help to make a beautiful website about our company showcasing our products.  We have a really good budget in mind. Let’s collaborate together."
              ></textarea>
            </div>
            <input className="sent-btn" type="button" value="Let's do this" />
          </form>
        </div>
      </section>
    </div>
  );
}
