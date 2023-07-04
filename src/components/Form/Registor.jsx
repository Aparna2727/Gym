import React, { useState, useEffect } from "react";
import style from "./registor.module.css";
import { Link } from "react-router-dom";

export function RegistorPage() {
  const initialValues = { username: "", email: "", password: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState([]);

  function handleChange(e) {
    console.log(e.target);

    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValues)); // we are getting data from the from
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues)
    }
  }, [formErrors]);

  function validate(values) {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (values.phone.length > 10) {
      errors.phone = "Phone number must be equal to 10 characters!";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone number must be equal to 10 characters!";
    } else {
      console.log("data added succesfully");
      // store the user data in localStorage from the registration form
      localStorage.setItem(
        "userDataKey",
        JSON.stringify([...data, formValues])
      );
    }

    return errors;
  }
  // https://images.pexels.com/photos/3984359/pexels-photo-3984359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  // https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  // https://images.pexels.com/photos/7394339/pexels-photo-7394339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3984359/pexels-photo-3984359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          backgroundSize: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={style.form_page}>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div
              style={{
                color: "green",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "2%",
              }}
            >
              Signed in successfully
            </div>
          ) : (
            <div></div>
          )}

          <div
            style={{
              marginTop: "2rem",
              borderRadius: "2rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              padding: "2rem",
            }}
          >
            <form onSubmit={handleSubmit}>
              <h2 style={{ color: "red", fontSize: "3rem", marginTop: "2rem" }}>
                REGISTER
              </h2>
              <div className={style.inputs_section}>
                <label className={style.label_tag}>Full Name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Eneter Full Name"
                  className={style.inputs}
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p style={{ color: "red" }}>{formErrors.username}</p>
              <div className={style.inputs_section}>
                <label className={style.label_tag}>Email address</label>
                <input
                  type="Email"
                  name="email"
                  placeholder="Eneter Email"
                  className={style.inputs}
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p style={{ color: "red" }}>{formErrors.email}</p>
              <div className={style.inputs_section}>
                <label className={style.label_tag}>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={style.inputs}
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p style={{ color: "red" }}>{formErrors.password}</p>
              <div className={style.inputs_section}>
                <label className={style.label_tag}>Phone Number</label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone No."
                  className={style.inputs}
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <p style={{ color: "red" }}>{formErrors.phone}</p>
              <button type="submit" className={style.btn}>
                Submit
              </button>
              <p
                style={{
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  color: "red",
                  marginBottom: "5%",
                }}
              >
                Already registered?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  login In?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
