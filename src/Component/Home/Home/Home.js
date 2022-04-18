import React from 'react';
import Carosol from '../Carosol/Carosol';
import Extrapart from '../Extrapart/Extrapart';
import Services from '../Servicess/Services';

const Home = () => {
    return (
        <div>
            <Carosol></Carosol>
            <Services></Services>
            <Extrapart></Extrapart>
        </div>
    );
};

export default Home;