import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlanteCard from "./PlanteCard";
import { getPlantes } from "../../slices/plantes/plantesSlice";

const Plante = () => {
  const [title] = useState("Wikiplante");
  document.title = title;

  const dispatch = useDispatch();
  const [loadPlantes, setLoadPlante] = useState(true);
  const dataPlantes  = useSelector((state) => state.plantes)

  useEffect(() => {
    if (dataPlantes.plantes === null && loadPlantes) {
      dispatch(getPlantes());
      setLoadPlante(false);
    }
    
    
    
  }, [loadPlantes, dispatch]);
  
  
  return (
    <>
      <div className="app plante py-10 box-border sm:max-w-[300px] flex flex-col items-center bg-white/20 rounded-lg gap-10">
        <h2 className=" px-5 font-bold text-2xl font-vercetti ">{dataPlantes.plantes.length + 5} Plantes insérées dans la base de donnée à ce jour</h2>
        <div className="h-[80vh] scroll flex flex-wrap gap-10 mx-5 justify-center overflow-scroll snap-center snap-y scroll-smooth px-2">
          {dataPlantes.plantes
            ? dataPlantes.plantes.map((plante) => {
                return <PlanteCard key={plante.id} plante={plante} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Plante;
