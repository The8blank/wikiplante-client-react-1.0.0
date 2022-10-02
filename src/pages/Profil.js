import Log from "../components/log/Index";
import { UidContext } from "../components/AppContext";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import UserProfil from "../components/log/UserProfil";
import PlanteCard from "./Plantes/PlanteCard";

const Profil = () => {
  const [title] = useState("Wikiplante");
  document.title = title;
  const state = useSelector((state) => state.user);
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.user.user);

  return (
    <>
      <div className="app box-border flex flex-col sm:max-w-[300px]  md:w-auto center gap-5 font-bold text-xl text-neutral-900 bg-white/20 rounded-lg shadow-xl text-center">
        {uid && state.isLogged ? (
          <UserProfil />
        ) : (
          <Log inscription={true} connexion={false} />
        )}
      </div>
      {state.isLogged && uid && userData.Plantes.length >= 1 ? (
        <div
          className="plante box-border sm:max-w-[300px] flex flex-col items-center bg-white/20 rounded-lg gap-10"
        >
          <h2 className="text-2xl font-bold">Vos plantes ajoutées : </h2>
          <div className="scroll flex flex-wrap gap-10 mx-5 justify-center h-[90vh] overflow-scroll snap-center snap-y scroll-smooth px-2">
            {userData.Plantes.map((plante) => {
              return <PlanteCard key={plante.id} plante={plante} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profil;
