import React from "react";
import Log from "../components/log/Index";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div>
      <Logo />
      <Navigation />
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
  );
};

export default Profil;
