import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Image/AW_logo-01-01.png";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
}
  return (
    <div className="bg position-sticky">
      <nav className=" sticky-top navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img className="nav-logo" src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  href='home#traning'
                >
                  Traning
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/dashbord"
                >
                  Dashbord
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              
            <div className="d-flex px-5 mx-5">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  { user ? 
                    <button
                    className='link rounded-pill p-2'
                    onClick={handleSignOut}
                  > LogOut</button>
                    :
                    <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link1" : "link1"
                    }
                    to="/login"
                  >
                    LogIn
                  </NavLink>}
                </li>
              </ul>
            </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
