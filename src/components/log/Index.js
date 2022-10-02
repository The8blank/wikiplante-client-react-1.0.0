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
    <div className="max-w-2xl sm:text-base space-y-5 bg-slate-300/60 rounded-lg shadow-2xl font-vercetti p-5 flex flex-col items-center ">
      <ul className="hover:cursor-pointer w-fit flex mt-4 gap-5">
        <li
          id="connexion"
          onClick={handleModals}
          className={connexionModal ? "border-b-2 rounded-l px-2" : null}
        >
          Connexion
        </li>
        <li
          id="inscription"
          onClick={handleModals}
          className={inscriptionModal ? "border-b-2 rounded-l px-2" : null}
        >
          S'inscrire
        </li>
      </ul>
      {inscriptionModal && <Inscription />}
      {connexionModal && <Connexion />}
    </div>
  );
};

export default Log;
