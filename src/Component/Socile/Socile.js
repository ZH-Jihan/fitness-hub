import React from "react";
import {
    useSignInWithFacebook,
    useSignInWithGithub,
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Sociale = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
  const navigate = useNavigate();

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1 || fberror) {
    toast(error?.message || error1?.message || fberror?.message)
  };

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div className="d-flex flex-row align-items-center justify-content-center py-2">
      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
      <button onClick={() => signInWithFacebook()} type="button" className="btn icon btn-floating mx-1">
        <i className="fab fa-facebook-f"></i>
      </button>

      <button onClick={() => signInWithGoogle()} type="button" className="btn icon btn-floating mx-1">
        <i className="fab fa-google"></i>
      </button>

      <button onClick={() => signInWithGithub()} type="button" className="btn icon btn-floating mx-1">
        <i className="fab fa-github"></i>
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Sociale;
