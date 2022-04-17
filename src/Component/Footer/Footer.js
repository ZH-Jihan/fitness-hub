import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-footer">
      <div className="footer-conteinar">
        <div class="row">
          <div class="col-sm-6">
            <div class="card border-0 bg-transparent">
              <div class="card-body">
                <h2 class="card-title">
                  You'll never know your limits unless you push yourself to
                  them.
                </h2>
                <a href="#" class="btn start-btn">
                  START NOW
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 footer-des">
            <div class="card border-0 bg-transparent">
              <div class="card-body">
                <a href="#" className="dev-link">@avwilliamson</a>
                <h6>Aaron Williamson</h6>
                <p>
                  RT @<a href="#">Gotoguylv</a>: Got to meet @avwilliamson today
                  for lunch and see how we can help watch each other grow! He
                  clearly has an edge on....
                  <a href="#">https://t.co/gj7lB5fSky</a>
                  <br />
                  <small>Jan 10, 2022, 8:50 PM</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="socile">Socile</div>
          <p className="footer-des">
            © Copyright 2019 By Aaron Williamson. All rights reserved.
          </p>
          <a href="#" className="dev-link">Web Desing & Development : Zakir Hossain</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
