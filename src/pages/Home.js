import React from "react";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <>
      <div className="app flex justify-center flex-col items-center h-full gap-5">
        <h2 className="font-aloeverra text-6xl text-stone-900 tracking-widest font-bold">
          Bienvenue sur Wikiplante
        </h2>
        <p className="text-xl font-vercetti font-bold text-stone-900">
          Une Base de donnée sur les vegetaux pour étudiant et professionnels
        </p>
        <p className="text-xl font-vercetti font-bold text-stone-900">
          Crée from scratch par Samuel Chojnacki
        </p>
      </div>
    </>
  );
};

export default Home;
