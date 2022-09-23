import React from 'react';
import Log from '../components/log/Index';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
           <h1>ACCEUIL</h1> 
           <Log inscription={false} connexion={true}/>
        </div>
    );
};

export default Home;