import React from "react";


const Home = () => {
  return (
    <>
      <div className="app p-10 flex flex-col gap-5 font-bold text-xl text-neutral-900 bg-white/20 rounded-lg shadow-xl text-center">
        <h2 className="font-aloeverra text-5xl sm:text-4xl">
          Bienvenue sur Wikiplante
        </h2>
        <p className="font-vercetti tracking-widest">
          Une Base de donnée sur les vegetaux pour étudiant et professionnels
        </p>
        <p className="">
          Crée from scratch par Samuel Chojnacki
        </p>
      </div>
    </>
  );
};

export default Home;


// font-aloeverra text-5xl text-neutral-900 tracking-widest font-bold
