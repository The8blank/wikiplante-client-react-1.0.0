import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UidContext } from "./components/AppContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Plante from "./pages/Plante";
import Profil from "./pages/Profil";
import axios from "axios";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import { useDispatch } from "react-redux";
import { deco, getUser } from "./slices/user/userSlice";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get("http://localhost:8080/api/user/jwtid", { withCredentials: true })
        .then((res) => res.data);
      if (data.result === false) {
        dispatch(deco());
      } else if (data.result === true) {
        dispatch(getUser(data.id));
        setUid(data.id);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plante" element={<Plante />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
};

export default App;
