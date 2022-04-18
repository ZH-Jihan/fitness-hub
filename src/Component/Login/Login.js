import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../Image/draw2.webp";
import "./Login.css";

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithGithub, gituser, gitloading, giterror] =useSignInWithGithub(auth);
  const [signInWithFacebook, fbuser, fbloading, fberror] =useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, user, loading, error] =useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, sederror] =useSendPasswordResetEmail(auth);

  const passwordRef = useRef("");
  const emailRef= useRef("");

  const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email,password)
    
  }

  const navigate = useNavigate();
  let eroreliment;
  if (error || giterror || fberror || gerror) {
    eroreliment = (
      <div>
        <p className="text-danger">Error: {error?.message || giterror?.message || fberror?.message || gerror?.message}</p>
      </div>
    );
  }
  if (loading || gitloading || fbloading || gloading) {
    <p>Loading...</p>;
  }
  if (user || gituser || fbuser || guser) {
    navigate("/home");
  }
  return (
    <section>
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
                  onClick={() => signInWithFacebook()}
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
                  onClick={() => signInWithGithub()}
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <div className="or-border"></div>
                <p className="text-center justify-content-center  fw-bold mx-3 mb-0">
                  Or
                </p>
                <div className="or-border"></div>
              </div>

              {/* Email input */}
                <input
                  ref={emailRef}
                  type="email"
                  name="Email"
                  className="form-control form-control-lg mb-4"
                  placeholder="Enter a valid email address"
                  required 
                />
              {/* <Password input  */}
                <input ref={passwordRef} type="password"
                  className="form-control form-control-lg mb-4"
                  placeholder="Enter password"
                  required 
                />
              {eroreliment}
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
                <a
                  onClick={async () => {
                    const email = emailRef.current.value;
                    await sendPasswordResetEmail(email);
                    alert("Sent email");
                  }}
                  href="#!"
                  className="link-danger"
                >
                  Forgot password?
                </a>
              </div>

              <div className="text-center  mt-4 pt-2">
                <button
                  type="button"
                  className="btn login-btn btn-lg"
                  style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  LogIn
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/singup" className="link-danger">
                    Register
                  </Link>
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
