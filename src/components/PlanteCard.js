import React from "react";
import { useSelector } from "react-redux";

const PlanteCard = (props) => {
  const plante = props.plante;
  return (
    <div className=" snap-center bg-slate-300 w-96 h-[29%] flex flex-col items-center font-semibold rounded p-5">
      <div className="bg-slate-400 h-10 w-10 flex items-center justify-center rounded-full">
      <i className="fa-solid fa-leaf"></i>
      </div>
      <h2>{plante.id}</h2>
      <h2>
        {plante.genre} {plante.espece} {plante.sous_espece_cultivar}
      </h2>
      <p><span>Nom vernaculaire:</span> {plante.nom_commun}</p>
      <p><span>Famille:</span> {plante.famille}</p>
      <p className="text-red-800 hover:underline hover:cursor-pointer">{plante.isCompleted? "Fiche compète" : "Completer"}</p>
    </div>
  );
};

export default PlanteCard;
