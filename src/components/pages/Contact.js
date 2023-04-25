import React from "react";
import Form from "../Form";

export default function Contact() {
  return (
    <div className="bg-night">
      <section id="contact" className="contact-form-section padding-custom">
        <div className="contact-text mt-5">
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

        <Form />
      </section>
    </div>
  );
}
