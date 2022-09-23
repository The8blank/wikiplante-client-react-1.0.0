import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UidContext } from "./components/AppContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Plantes from "./pages/Plante";
import Profil from "./pages/Profil";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect (() => {
    const loadUid = async () => {
        await axios.get('http://localhost:8080/api/user/jwtid', {withCredentials: true})
        .then((res) => {
            setUid(res.data)
        })
        .catch((err) => {
            console.log('no token')
        });  
    }

    loadUid()
  }, [uid])

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plantes" element={<Plantes />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
};

export default App;
