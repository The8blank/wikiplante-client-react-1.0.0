import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UidContext } from "./components/AppContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Plante from "./pages/Plantes/Plante";
import Profil from "./pages/Profil";
import Fiche from "./pages/Fiche";
import axios from "axios";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { deco, getUser } from "./slices/user/userSlice";


const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user)


  useEffect(() => {
    if (userData.user) {
      setUid(userData.user.id)
    }

    const fetchUserData = async () => {
      const data = await axios
        .get("http://localhost:8080/api/user/jwtid", { withCredentials: true })
        .then((res) => res.data);

      if (data.result === false) {
        setUid(null)
        dispatch(deco())
      }
    
       if (data.result === true && !userData.user) {
        setUid(data.token.userId)
        dispatch(getUser(data.token))
       }
       
    }

    fetchUserData().catch(console.error);
  },[userData.user,dispatch]);
  

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
          <Route path="/fiche/:id" id="test" element={<Fiche />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
};

export default App;
