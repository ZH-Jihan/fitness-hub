import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Sociale from '../Socile/Socile';
import './Singup.css';

const SingUp = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword,user,loading,error] =useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
     console.log('user', user);  
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const name = firstname + lastname;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start mt-5">
    <div className="row gx-lg-5 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zindex: "10"}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "rgb(0 85 255)"}}>
          The best offer <br />
          <span style={{color: "rgb(0 85 255)"}}>for your Fitness</span>
        </h1>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form onSubmit={handleRegister}>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <div className="form-outline">
                    <input name='firstname' type="text" id="form3Example1" className="form-control" required/>
                    <label className="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-outline">
                    <input name="lastname" type="text" id="form3Example2" className="form-control" required/>
                    <label className="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-2">
                <input name="email" type="email" id="form3Example3" className="form-control" required/>
                <label className="form-label" for="form3Example3">Email address</label>
              </div>
              <div className="form-outline mb-2">
                <input name="password" type="password" id="form3Example4" className="form-control" required/>
                <label className="form-label" for="form3Example4">Password</label>
              </div>
              <div className="form-check d-flex  mb-3">
                <input onClick={() => setAgree(!agree)} className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`}for="form2Example33">
                Accept Our Terms and Conditions
                </label>
              </div>
              <button disabled={!agree} type="submit" className="btn btn-primary btn-block mb-2">
                Sign up
              </button>
              <p className='mb-2'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none '>Please Login</Link></p>
              <div className="text-center">
                <Sociale></Sociale>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default SingUp;
