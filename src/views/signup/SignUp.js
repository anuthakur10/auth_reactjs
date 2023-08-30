import React, { useState } from 'react'
import './SignUp.css'
import btnleftarrow from '../../assets/back-icon-arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../API'
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from 'react-toastify'

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      // confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
        confirmPassword: Yup.string().label('confirm password').oneOf([Yup.ref('password'), null], 'Passwords must match')
    }),
    validateOnChange: false,
    onSubmit: (values) => {
      setIsLoading(true);
      if (values) {
        return new Promise((resolve, reject) => {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              // confirmPassword: values.confirmPassword,
              role:"user"
            }),
          };
          fetch(`${BASE_URL}/api/users/createUser`, options)
            .then((d) => d.json())
            .then((response) => {
              if (response.statusCode === 200) {
                toast.success("User Created successfully")
                navigate("/login");
                console.log(response.data);
                resolve(response.data);
              } else {
                alert(
                  "Wrong Credentials, please enter valid name and password"
                );
                reject(new Error("wrong"));
              }
            })
            .catch((err) => {
              reject(err);
            });
        });
      } else {
        formik.setFieldError(
          "loginPassword",
          "email and password do not match."
        );
        setIsLoading(false);
      }
    },
  });
  return (
    <div className="body-mobile-info">
        <div className="mb-30px">
          <button className="back-top-btn"><img src={btnleftarrow} onClick={() =>navigate('/login')}/></button>
          <h1>Create Account</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <div className="signup-form-info">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" id='email'
              name='email'
              type='email'
              placeholder='Your Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className='form-control'
              id='password'
              name='password'
              type='password'
              placeholder='Your password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input className='form-control'
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              placeholder='Your Confirm password'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
            </div>
        </div>
        <div className="bottom-btn-info">
                <div className="btn-links text-align-center mb-3">
                  <Link to="/login">I have an Account</Link>
                </div>
                <div className="bg-blue-clr">
                  <button className="btn-cstm">Sign Up</button>
                </div>
        </div>
          </form>
    </div>
  )
}

export default SignUp
