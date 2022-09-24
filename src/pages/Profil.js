import React from "react";
import Log from "../components/log/Index";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <>
      <div className="app">
        <div className="profil-page">
          {uid ? (
            <h1>UPDATE PAGE</h1>
          ) : (
            <div className="log-container">
              <Log inscription={true} connexion={false} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profil;
