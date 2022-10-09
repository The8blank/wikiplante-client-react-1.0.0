import React, { useEffect, useState } from "react";
import { addPlantes } from "../../slices/plantes/plantesSlice";
import { useDispatch, useSelector } from "react-redux";
import PlanteCard from "./PlanteCard";
import axios from "axios";
import Recherche from "./Recherche";

const Plante = () => {
  const [title] = useState("Wikiplante");
  document.title = title;

  const dispatch = useDispatch();
  const [plantesData, setPlantesData] = useState("");
  const [plantesFiltred, setPlantesFiltred] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDataPlante = async () => {
      if (!plantesData) {
        const data = await axios
          .get("http://localhost:8080/api/plante/")
          .then((res) => res.data)
          .catch((err) => console.log(err));

        setPlantesData(data);
        setPlantesFiltred(data);
        dispatch(addPlantes(data));
      }
    };

    const configureFilterService = () => {
      const categorieArray = [];
      for (let i = 0; i < plantesData.length; i++) {
        console.log(plantesData[i].sous_espece_cultivar);
        const categorie = plantesData[i].categorie;
        if (!categorieArray.includes(categorie)) {
          categorieArray.push(categorie);
        }
      }
      setCategories(categorieArray);
    };

    fetchDataPlante();
    configureFilterService();
  }, [plantesData, dispatch]);

  const handleSearchTerm = (value) => {
    setSearchTerm(value);
  };

  const argumentSearchTerm = (value) => {
    const searchIn =
      value.genre +
      " " +
      value.espece +
      " " +
      value.nom_commun +
      " " +
      value.sous_espece_cultivar;

    if (searchIn.toLowerCase().includes(searchTerm)) {
      return value;
    }
  };

  return (
    <div className="app plante py-10 box-border sm:max-w-[300px] h-[80vh]  min-w-full flex flex-col items-center  bg-white/20 rounded-lg gap-10">
      <Recherche handleSearchTerm={handleSearchTerm} />
      <div className="flex flex-wrap w-fit mx-10 gap-5 overflow-scroll scroll content-start snap-center snap-y scroll-smooth">
        {plantesFiltred
          ? searchTerm
            ? plantesFiltred
                .filter((val) => argumentSearchTerm(val))
                .map((plante) => {
                  return <PlanteCard key={plante.id} plante={plante} />;
                })
            : categories.map((categorie) => {
                return (
                  <div className=" pt-10 flex flex-wrap flex-col gap-4 snap-start w-full">
                    <p className="text-3xl font-bold font-aloeverra  text-neutral-900">{categorie} :</p>
                    <div className="flex flex-wrap gap-5">
                      {plantesFiltred
                        .filter((plante) => {
                          return plante.categorie.includes(categorie);
                        })
                        .map((plante) => {
                          return <PlanteCard key={plante.id} plante={plante} />;
                        })}
                    </div>
                  </div>
                );
              })
          : "no data"}
      </div>
    </div>
  );
};

export default Plante;
