import React from "react";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <>
      <div className="app">
        <h1>ACCEUIL</h1>
      </div>
    </>
  );
};

export default Home;
