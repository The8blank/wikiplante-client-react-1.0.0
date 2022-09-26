import React from "react";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <>
      <div className="app">
        <h2>
          Bienvenue sur Wikiplante
        </h2>
        <p>
          Une Base de donnée sur les vegetaux pour étudiant professionnels
        </p>
      </div>
    </>
  );
};

export default Home;
