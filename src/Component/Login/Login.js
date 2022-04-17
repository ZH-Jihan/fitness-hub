import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom";
import auth from '../../firebase.init';
import img from "../../Image/draw2.webp";
import './Login.css';

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    <Navigate to="/home" replace={true} />
  };
  return (
    <section >
      <div className="container-fluid h-custom my-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5 py-3">
            <img src={img} alt="" srcset="" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-3">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center ">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn icon btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn icon btn-floating mx-1"
                  onClick={() => signInWithGoogle()}
                >
                  <i className="fab fa-google"></i>
                </button>

                <button
                  type="button"
                  className="btn icon btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                  <div className="or-border"></div>
                <p className="text-center justify-content-center  fw-bold mx-3 mb-0">Or</p>
                <div className="or-border"></div>
              </div>

              {/* Email input */}

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  required
                />
                <label className="form-label" for="form3Example3">
                  Email address
                </label>
              </div>

              {/* <Password input  */}

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  required
                />
                <label className="form-label" for="form3Example4">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox  */}

                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center  mt-4 pt-2">
                <button
                  type="button"
                  className="btn login-btn btn-lg"
                  style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }}
                >LogIn</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;