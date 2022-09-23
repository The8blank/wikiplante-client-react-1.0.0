import React from 'react';
import Log from '../components/log/Index';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Home = () => {
    const uid = useContext(UidContext);
    return (
        <div className='body'>
            <Logo/>
            <Navigation/>
           <h1>ACCEUIL</h1> 
        </div>
    );
};

export default Home;