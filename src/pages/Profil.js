import React, { useEffect, useState } from "react";
import Log from "../components/log/Index";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import UserProfil from "../components/log/UserProfil";
import PlanteCard from "../components/PlanteCard";

const Profil = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer.user);

  const [plante, setPlante] = useState(0);

  useEffect(() => {
    if (uid) {
      if (userData.Plantes.length > 0) {
        setPlante(userData.Plantes);
      }
    }
  }, []);

  return (
    <>
      <div className="app self-center flex flex-col justify-center items-center">
        {uid ? <UserProfil /> : <Log inscription={true} connexion={false} />}
      </div>
      {plante ? (
        <div id="planteUser" className="flex flex-col items-center bg-white/20 rounded-lg gap-10">
          <h2 className="text-2xl font-bold">Vos plantes ajoutées : </h2>
          <div className="scroll flex flex-wrap gap-10 mx-5 mb-5 justify-center h-[60vh] overflow-auto snap-center snap-y scroll-smooth">
            {plante.map((plante) => {
              return <PlanteCard key={plante.id} plante={plante}/>
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profil;
