import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div>
      <div class="crd">
        <div class="card-header text-center fw-bolder fs-1">Qus & Ans</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <h4>
              Write the difference between authorization and authentication ?
            </h4>
            <p>
              1. Authentication is the process of verifying who someone is,
              whereas authorization is the process of verifying what specific
              applications, files, and data a user has access to. 2.
              Authentication works through passwords, one-time pins, biometric
              information, and other information provided or entered by the
              user.On the other hand,authorization works through settings that
              are implemented and maintained by the organization. 3.
              Authentication is the first step of a good identity and access
              management process.On the other hand,authorization always takes
              place after authentication.
            </p>
          </li>
          <li class="list-group-item">
            <h4>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h4>
            <p>
              We use firebase for authentication system.But besides
              authentication system it provides many others functionality like
              hosting,storage etc. It is a service of google and easy to use.It
              store data in real time. Others options for authentication
              are:Auth0,MongoDB,Octa,Passport,keycloak etc.
            </p>
          </li>
          <li class="list-group-item">
            <h4>
              What other services does firebase provide other than
              authentication?
            </h4>
            <p>
              Firebase is popular now-a-days. Firebase provide these services
              other than authentication: Cloud firestore,cloud
              functions,hosting,cloud storage,google analytic,predictions,cloud
              messaging etc.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
