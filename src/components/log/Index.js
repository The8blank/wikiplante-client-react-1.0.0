import React, { useState } from "react";
import Connexion from "./Connexion";
import Inscription from "./Inscription";

const Log = (props) => {
  const [inscriptionModal, setInscriptionModal] = useState(props.inscription);
  const [connexionModal, setConnexionModal] = useState(props.connexion);

  const handleModals = (e) => {
    if (e.target.id === "inscription") {
      setConnexionModal(false);
      setInscriptionModal(true);
    }
    if (e.target.id === "connexion") {
      setInscriptionModal(false);
      setConnexionModal(true);
    }
  };

  return (
    <div className="flex flex-col bg-stone-300/70 w-[450px] h-[450px] items-center space-y-3 p-3 rounded-lg shadow-2xl font-vercetti">
      <ul className="font-bold hover:cursor-pointer flex space-x-8">
        <li id="connexion" onClick={handleModals} className={connexionModal? 'border-b-2 rounded-l shadow-md' : null}>
          Connexion
        </li>
        <li id="inscription" onClick={handleModals} className={inscriptionModal? 'border-b-2 rounded-l shadow-md' : null}>
          S'inscrire
        </li>
      </ul>
      {inscriptionModal && <Inscription/>}
      {connexionModal && <Connexion />}
    </div>
  );
};

export default Log;
