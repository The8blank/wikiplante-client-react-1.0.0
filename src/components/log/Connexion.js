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
        errorMessage.innerHTML = err.response.data.errors.message;
      });
  };

  return (
    <div className=" p-5 space-y-5">
      <p className="font-semibold text-center">
        Entrez vos informations pour vous connecter à votre compte
      </p>
      <form
        onSubmit={handleLogin}
        id="connexion-form"
        className="space-y-2 rounded flex flex-col p-5"
      >
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
          className="  bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-gray-500/50"
        />
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
          className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-gray-500/50"
        />
        <div className="error"></div>

        <input
          type="submit"
          id="connexion-btn"
          value={"Se connecter"}
          className="relative flex w-full justify-center rounded-md border border-transparent bg-stone-600 py-2 px-4 text-sm font-medium text-white hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
        />
      </form>
    </div>
  );
};

export default Connexion;
