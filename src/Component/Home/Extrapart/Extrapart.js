import React from 'react';
import './Extapart.css';

const Extrapart = () => {
    return (
        <div className='row my-5 w-75 m-auto  card-x'>
            <div className='col-md-12 col-lg-6 p-3'>
                <h3>WHEN FITNESS LIFESTYLE MEETS PASSION AND PURPOSE</h3>
                <h4> <strong>Aaron Williamson</strong> , known for transforming the physiques of actors, top athletes and other film personnel, has grown to new levels in the film and entertainment industry.</h4>
                <p>Fueled by fitness & motivated by inspiring others, Aaron has discovered his purpose outside of the gym. He now spends his time channeling his extraordinary life experiences into character building acting roles. Aaron is also driven by supporting and helping others through various organizations like the SPCA, various troubled youth groups, and Veteran specific non-profits. </p>
            </div>
            <div className='col-md-12 col-lg-6 p-3'>
                <h3>BACKSTORY</h3>
                <p>Aaron Williamson was born and raised in Daytona Beach, FL. After graduating from high school he joined the Marine Corps which is when his life drastically changed. Out of high school he traveled the world as a Marine Corps infantryman participating in several large scale training evolutions.</p>
                <a target='_blank' href="https://www.aaronwilliamson.net/about" rel="noreferrer"><button className='click-h'>Click here</button></a>
            </div>
        </div>
    );
};

export default Extrapart;