import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import PlanteCard from "./PlanteCard";
import { getPlantes } from "../../slices/plantes/plantesSlice";

const Plante = () => {
  const [title] = useState("Wikiplante");
  document.title = title;

  const dispatch = useDispatch();
  const [loadPlantes, setLoadPlante] = useState(true);
  const dataPlantes = useSelector((state) => state.plantes);
  const [plantesFiltred, setPlantesFiltred] = useState(dataPlantes.plantes);

  useEffect(() => {
    if (dataPlantes.plantes === null && loadPlantes) {
      dispatch(getPlantes());
      setLoadPlante(false);
    }
  }, [loadPlantes, dispatch]);

  const inputRef = useRef("");

  const LookFor = () => {
    const plantesFiltre = []

    for (let i = 0; i < dataPlantes.plantes.length; i++) {
      const element = dataPlantes.plantes[i];
      const genreEspece = element.genre + " " + element.espece + " " + element.nom_commun
      
      if (genreEspece.toLowerCase().indexOf(inputRef.current.value) >= 0) {
        plantesFiltre.push(element)
        setPlantesFiltred(plantesFiltre) 
        console.log(genreEspece);
      }

    }
    
    
  };

  return (
    <>
      <div className="app plante py-10 box-border sm:max-w-[300px] flex flex-col items-center bg-white/20 rounded-lg gap-10">
        <h2 className=" px-5 font-bold text-2xl font-vercetti ">
          {dataPlantes.plantes ? dataPlantes.plantes.length + 5 : null} Plantes
          insérées dans la base de donnée à ce jour
        </h2>
        rechercheihefoîheroihfgore
        <input type="text" name="look" id="look" ref={inputRef} onChange={LookFor}/>
        <div className="h-[80vh] scroll flex flex-wrap gap-10 mx-5 justify-center overflow-scroll snap-center snap-y scroll-smooth px-2">
          {dataPlantes.plantes
            ? plantesFiltred.map((plante) => {
                return <PlanteCard key={plante.id} plante={plante} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Plante;
