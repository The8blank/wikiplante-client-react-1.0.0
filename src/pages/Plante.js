import React from "react";
import { useState } from "react";

const Plante = () => {
  const [title, setTitle] = useState("Wikiplante");
  document.title = title;
  return (
    <>
      <div className="app p-10 flex flex-col gap-5 font-bold text-xl text-neutral-900 bg-white/20 rounded-lg shadow-xl text-center">
        <h1>Herbier</h1>
      </div>
    </>
  );
};

export default Plante;
