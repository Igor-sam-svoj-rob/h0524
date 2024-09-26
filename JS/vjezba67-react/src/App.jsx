import { useState } from "react";

const App = () => {
  const initialValues = { user: "", email: "", pass: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const validate = (v) => {
    const errors = {};
    if (!v.user) {
      errors.user = "Korisničko ime nije ispravno upisano";
    }
    if (!v.email) {
      errors.email = "E-mail nije ispravno upisan";
    }
    if (!v.pass) {
      errors.pass = "Lozinka nije ispravno upisana";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
