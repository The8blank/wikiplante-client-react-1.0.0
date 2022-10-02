import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Fiche = () => {
  const [title, setTitle] = useState("Wikiplante");
  const { id } = useParams();
  const [plante, setPlante] = useState(false);

  useEffect(() => {
    const fetchPlante = async () => {
      const data = await axios
        .get(`http://localhost:8080/api/plante/${id}`)
        .then((res) => res.data);
      setPlante(data.plante);
      setTitle(data.plante.nom_commun);
    };

    fetchPlante();
    document.title = title;
  }, [title]);

  return (
    <>
      {plante ? (
        <div className="  bg-slate-300/90 rounded-lg shadow-2xl font-vercetti w-[90vw] flex justify-center">
          <div className="font-bold w-full p-10 space-y-5">
            <div className="flex flex-wrap gap-10 justify-between">
              <img src="./logo.png" alt="" />
              <h2 className="italic">
                {plante.genre} {plante.espece} {plante.sous_espece_cultivar}
              </h2>
              <h2 className="">Famille: {plante.famille} </h2>
            </div>
            <div className="space-y-3">
              <div>
                <p>Port : {plante.port}</p>
              </div>
              <div>
                <p>Exposition : {plante.exposition}</p>
              </div>
              <div>
                <p>Type de sol : {plante.sol}</p>
              </div>
              <div>
                <p>Couleur du feuillage : {plante.couleur_feuillage}</p>
              </div>
              <div>
                <p>Déscription du feuillage : {plante.periode_floraison}</p>
              </div>
              <div>
                <p>Couleur de la floraison : {plante.couleur_floraison}</p>
              </div>
              <div>
                <p>Période de floraison : {plante.periode_floraison}</p>
              </div>
              <div>
                <p>
                  Déscription de la floraison : {plante.description_floraison}
                </p>
              </div>
              <div>
                <p>Déscription du fruit : {plante.description_fruit}</p>
              </div>
              <div>
                <p>Déscription globale : {plante.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Fiche;
