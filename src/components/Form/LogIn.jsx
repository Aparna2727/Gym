import React, { useState, useEffect } from "react";
import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";

export function LogInPage() {
  const Home = useNavigate();

  const initialValues = { email: "", password: "" };
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

  function validate(values) {
    const getuserArr = localStorage.getItem("userDataKey");
    console.log("colllect data", getuserArr);
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
    } else {
      if (getuserArr && getuserArr.length) {
        const userData = JSON.parse(getuserArr);
        // console.log(userData);

        const userLogin = userData.filter((ele, index) => {
          return ele.email === values.email && ele.password === values.password;
        });
        // console.log(userLogin)

        if (userLogin.length === 0) {
          alert("invalid User details");
        } else {
          alert("user logIn sucssesfully");
          Home("/");
        }
      }
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <>
      {/* https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&w=600 */}

      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/3984359/pexels-photo-3984359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          // border:"2px solid green",
          backgroundSize: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={style.login_section}>
          <div
            style={{
              marginTop: "5rem",
              borderRadius: "2rem",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              padding: "2rem",
            }}
          >
            <form onSubmit={handleSubmit}>
              <h2 style={{ color: "red", fontSize: "3rem", marginTop: "2rem" }}>
                Log in
              </h2>
              <div className={style.inputs_part}>
                <label className={style.label_part}>Email address</label>
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
              <div className={style.inputs_part}>
                <label className={style.label_part}>Password</label>
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
              <button type="submit" className={style.btn_login}>
                Log in
              </button>
              <p
                style={{
                  fontFamily: "cursive",
                  fontWeight: "bold",
                  color: "red",
                  marginBottom: "2%",
                }}
              >
                Don't have an account?{" "}
                <Link to="/registor" style={{ textDecoration: "none" }}>
                  Register
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
