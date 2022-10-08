import React from "react";
import { Component, useState } from "react";

const Recherche = ({ handleSearchTerm }) => {
  return (
    <div className="w-full px-5 ">
      <div className="flex gap-5 flex-wrap">
        <p className="font-vercetti font-bold text-xl">Recherche</p>
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Genre /Espece /Nom commun"
          onChange={(e) => handleSearchTerm(e.target.value.toLowerCase())}
          className='px-2 rounded-md w-[240px]'
        />
      </div>
    </div>
  );
};

export default Recherche;
