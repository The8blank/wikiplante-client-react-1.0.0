import React, {useState} from 'react';
import Connexion from './Connexion';
import Inscription from './Inscription';

const Log = (props) => {
    const [inscriptionModal, setInscriptionModal] = useState(props.inscription);
    const [connexionModal, setConnexionModal] = useState(props.connexion);

    const handleModals = (e) => {
         if (e.target.id === "inscription") {
            setConnexionModal(false)
            setInscriptionModal(true)
        } 
        if (e.target.id === "connexion") {
            setInscriptionModal(false)
            setConnexionModal(true)
        }
    }

    return (
        <div>
            <div className="connection-form">
                <ul>
                    <li id='connexion' onClick={handleModals}>connexion</li>
                    <li id='inscription' onClick={handleModals}>s'inscrire</li>
                </ul>
                {inscriptionModal &&  < Inscription />}
                {connexionModal &&  < Connexion />}
            </div>
        </div>
    );
};

export default Log;