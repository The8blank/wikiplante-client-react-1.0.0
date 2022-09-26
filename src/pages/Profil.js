import React from "react";
import Log from "../components/log/Index";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <>
      <div className="app h-full flex justify-center items-center">
          {uid ? (
            <h1>UPDATE PAGE</h1>
          ) : (
            <Log inscription={true} connexion={false} />
          )}
      </div>
    </>
  );
};

export default Profil;
