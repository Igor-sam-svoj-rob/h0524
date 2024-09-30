import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  const initialValues = { user: "", email: "", pass: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormReset = () => {
    setFormValues(initialValues);
    setFormErrors({});
    setIsSubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(validate(formValues)).length === 0) {
      emailjs
        .sendForm("service_6dh7lkj", "template_01hwhu9", form.current, {
          publicKey: "WEmu56w5cCsRuO63q",
        })
        .then(
          () => {
            handleFormReset();
            console.log("Uspjeh");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const validate = (v) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!v.user) {
      errors.user = "Korisničko ime nije ispravno upisano";
    }
    if (!v.email) {
      errors.email = "E-mail polje ne može ostati prazno";
    } else if (!regex.test(v.email)) {
      errors.email = "Niste unijeli ispravnu e-mail adresu";
    }
    if (!v.pass) {
      errors.pass = "Ovo polje ne može ostati prazno";
    } else if (v.pass.length < 6) {
      errors.pass = "Lozinka mora imati više od 6 znakova";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="title">Uspjeh</div>
      ) : (
        <div className="title">Ispunite formu</div>
      )}

      <form ref={form} onSubmit={handleSubmit}>
        <h1>Login forma</h1>
        <hr />
        <div className="form">
          <div className="field">
            <label htmlFor="user">Username</label>
            <input
              type="text"
              name="user"
              id="user"
              value={formValues.user}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.user}</p>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formValues.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="pass"
              id="password"
              value={formValues.pass}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.pass}</p>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
