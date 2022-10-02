import React from "react";
import { useSelector } from "react-redux";

const UserProfil = () => {
  const userData = useSelector((state) => state.user.user);
  return (
    <>
      {/* card user profil */}
      <div className="flex flex-col items-center gap-5 p-5">
        <div className="rounded-full bg-neutral-100/10 flex justify-center items-center  h-[200px] w-[200px] ">
          <img className="h-[150px]" src="image\Profil_Picture.png" alt="" />
        </div>
        <h3 className="text-2xl font-aloeverra font-bold text-neutral-900 ">
          {userData.username.charAt(0).toUpperCase() +
            userData.username.slice(1)}
        </h3>
        <div>
          <div className=" font-vercetti text-lg tracking-wide text-neutral-900 flex sm:flex-col m-5 space-x-3">
            <p className="font-bold">Adresse Email :</p>
            <p className="font-semibold">{userData.email}</p>
          </div>
          <div className="font-vercetti text-lg tracking-wide text-neutral-900 flex sm:flex-col space-x-3 ">
            <p className="font-bold">
              Plantes inserée dans la base de donnée :
            </p>
            <p className="font-semibold">{userData.Plantes.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfil;

