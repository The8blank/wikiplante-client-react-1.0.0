import React, { useEffect, useState } from "react";
import { addPlantes } from "../../slices/plantes/plantesSlice";
import { useDispatch, useSelector } from "react-redux";
import PlanteCard from "./PlanteCard";
import axios from "axios";

const Plante = () => {
  const [title] = useState("Wikiplante");
  document.title = title;

  const dispatch = useDispatch();
  const [plantesData, setPlantesData] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    const fetchDataPlante = async () => {
      if (!plantesData) {
        const data = await axios
          .get("http://localhost:8080/api/plante/")
          .then((res) => res.data)
          .catch((err) => console.log(err));

        setPlantesData(data);
        dispatch(addPlantes(data));
      }
    };
    fetchDataPlante();
  }, [plantesData, dispatch]);

  const handleSearchTerm = (e) => {
    console.log(e.target.value);
    let value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  return (
    <div className="app plante py-10 box-border sm:max-w-[300px]  w-[85vw] flex flex-col items-center bg-white/20 rounded-lg gap-10">
      <div className="flex w-full px-10">
        <div className="flex gap-10">
          <p className="font-bold font-vercetti text-xl">Recherche</p>
          <input
            type="text"
            name="look"
            id="look"
            onChange={handleSearchTerm}
          />
        </div>
      </div>
      <div className="h-[80vh] scroll flex flex-wrap gap-10 mx-5 justify-center overflow-scroll snap-center snap-y scroll-smooth px-2">
        {plantesData ? (
          plantesData
            .filter((val) => {
              if (val.nom_commun.toLowerCase().includes(searchTerm)) {
                return val;
              } else if (val.genre.toLowerCase().includes(searchTerm)) {
                return val;
              } else if (val.espece.toLowerCase().includes(searchTerm)) {
                return val;
              } else if (
                val.sous_espece_cultivar.toLowerCase().includes(searchTerm)
              ) {
                return val;
              }
            })
            .map((plante) => {
              return <PlanteCard key={plante.id} plante={plante} />;
            })
        ) : (
          <div>no data</div>
        )}
      </div>
    </div>
  );
};

export default Plante;
