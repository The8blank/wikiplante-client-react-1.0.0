import React from "react";
import { redirect } from "react-router-dom";

const PlanteCard = (props) => {
  const plante = props.plante;
  const redirect = (e) => {
    /* window.open = `/fiche/:${e.currentTarget.id}` */
    window.open(
      `/fiche/${e.currentTarget.id}`,
      "_blank",
      "noopener,noreferrer"
    );
    redirect({});
  };
  return (
    <div
      onClick={redirect}
      id={plante.id}
      className="hover:cursor-pointer snap-center bg-slate-300  h-[30%] w-[250px] sm:w-[98%] flex flex-col items-center font-semibold rounded p-5"
    >
      <div className="bg-slate-400 h-10 w-10 flex items-center justify-center rounded-full">
        <i className="fa-solid fa-leaf"></i>
      </div>
      <div className="flex flex-col items-center mt-2 text-center space-y-3">
        <h2>{plante.id}</h2>
        <h2 className="font-bold italic">
          {plante.genre} {plante.espece} {plante.sous_espece_cultivar}
        </h2>
        <p>
          <span>Nom vernaculaire:</span> {plante.nom_commun}
        </p>
        <p>
          <span>Famille:</span> {plante.famille}
        </p>
        <p className="text-red-800 hover:underline hover:cursor-pointer">
        </p>
      </div>
    </div>
  );
};

export default PlanteCard;
