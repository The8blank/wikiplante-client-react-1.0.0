import React from "react";
import axios from "axios";
import { useState } from "react";

const Connexion = () => {
  const errorMessage = document.querySelector(".error");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/api/user/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => {
        errorMessage.innerHTML = err.response.data.errors;
      });
  };

  return (
    <div>
      <p>Entrez vos informations pour vous connecter à votre compte</p>
      <form
        onSubmit={handleLogin}
        id="connexion-form"
        className="space-y-2 rounded flex flex-col mt-5 text-start"
      >
        <div className="space-y-2">
          <label htmlFor="Email" className="font-bold">
            Email :
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-slate-200/50 appearance-none border-2 border-slate-200/50 rounded w-full py-1 px-1 text-slate-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-slate-500/50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="font-bold">
            Password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="bg-slate-200/50 appearance-none border-2 border-slate-200/50 rounded w-full py-1 px-1 text-slate-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-slate-500/50"
          />
        </div>
        <div className="space-y-2">
          <div className="error"></div>

          <input
            type="submit"
            id="connexion-btn"
            value={"Se connecter"}
            className="relative flex w-full justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Connexion;
