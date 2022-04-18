import React, { useEffect, useState } from 'react';
import Sarvice from '../../Sarvice/Sarvice';

const Services = () => {
    const [sarvices, setSarvice] = useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setSarvice(data));
    },[]);
    return (
        <div id='traning' className="reviews-area">
      <div className="container">
          <h1 className='text-center mt-3 fw-bold'>Provide Traning</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {sarvices.map(sarvice => (
            <Sarvice key={sarvice.id} sarvice={sarvice}></Sarvice>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Services;