import React from "react";
import { Link } from "react-router-dom";
import "./Sarvice.css";

const Sarvice = (sarvice) => {
  console.log(sarvice.sarvice);
  const { name, img, about, price } = sarvice.sarvice;
  return (
    <div className="col">
      <div className="card card-s">
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">Price: ${price}(Monthly)</p>
          <p className="card-text">{about}</p>
          <Link to="/checkout">
            <button className="btn btn-primary">Proceed Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sarvice;
