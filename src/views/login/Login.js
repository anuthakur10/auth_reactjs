import btnleftarrow from "../../assets/back-icon-arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
// custom imports
import { AuthContext } from "../../auth/AuthContext";
import AxiosClient from "../../services/axiosClient";
import { loginUrl } from "../../API";
import "./Login.css";
import { setUser } from "../../redux/slices/user";

const Login = (props) => {
  console.log(props, "><>");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const { setAuth } = useContext(AuthContext);

  const handleLoginSubmit = async (values) => {
    setIsLoading(true);
    const { email, password } = values;
    console.log(values);
    try {
      if (values) {
        const data = {
          email: email,
          password: password,
        };

        const response = await AxiosClient({
          url: loginUrl,
          method: "POST",
          data: data,
        });

        localStorage.setItem("user", JSON.stringify(response.data.data));
        props.setUser(response.data.data);
        setAuth(response.data.data);
        navigate("/dashboard");
      } else {
        toast.warn("Fill the email and Password");
        formik.setFieldError(
          "loginPassword",
          "email and password do not match."
        );
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const yupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yupSchema,
    validateOnChange: false,
    onSubmit: handleLoginSubmit,
  });

  return (
    <div className="body-mobile-info">
      <div className="mb-30px">
        <button className="back-top-btn">
          <img src={btnleftarrow} onClick={() => navigate("/")} />
        </button>
        <h1>Log In</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="signup-form-info">
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="btn-links pl-20px pr-20px mb-3">
            <Link to="#">Forgot Password?</Link>
          </div>
        </div>
        <div className="bottom-btn-info">
          <div className="btn-links text-align-center mb-3">
            <Link to="/signup">Create Account</Link>
          </div>
          <div className="bg-blue-clr">
            <button className="btn-cstm" type="submit">
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (userData) => {
      return dispatch(setUser(userData));
    },
  };
};

const mapstateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(Login);
