import { useState, useEffect } from "react";

const Form = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Please add your email";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    if (!values.name) {
      errors.name = "Please type your name";
    }
    if (!values.msg) {
      errors.msg = "Please let me know what you think";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="contact-form">
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="basic-info">
          <div className="name-form flex flex-col items-center">
            <label>Your Name</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleChange}
              className={formErrors.name && "input-error"}
            />
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </div>
          <div className="email-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              className={formErrors.email && "input-error"}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
        </div>
        <div className="message-form">
          <label>Your Message</label>
          <textarea
            rows="3"
            placeholder="Hi! We need your help to make a beautiful website about our company showcasing our products.  We have a really good budget in mind. Let’s collaborate together."
            type="text"
            name="msg"
            id="msg"
            value={formValues.msg}
            onChange={handleChange}
            className={formErrors.msg && "input-error message-area"}
          ></textarea>
          {formErrors.msg && <span className="error">{formErrors.msg}</span>}
        </div>

        <input className="sent-btn" type="submit" value="Let's do this" />
      </form>
    </div>
  );
};

export default Form;
