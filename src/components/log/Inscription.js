import axios from "axios";
import React from "react";
import { useState } from "react";

const Inscription = () => {
  const errorMessage = document.querySelector(".error");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8080/api/user/signup",
        {
          username,
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        window.location = "/";
      })
      .catch((err) => {
        errorMessage.innerHTML = err.response.data.errors[0].message;
      });
  };

  return (
    <div className=" p-5 space-y-5">
      <p className="font-semibold text-center">
        Entrez vos informations pour creer votre compte
      </p>

      <form
        onSubmit={handleLogin}
        id="inscription-form"
        className="space-y-2 rounded flex flex-col p-5"
      >
        <label htmlFor="username" className="font-bold">
          Username :
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required="required"
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-gray-500/50"
        />
        <label htmlFor="Email" className="font-bold">
          Email :
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required="required"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-gray-500/50"
        />
        <label htmlFor="password" className="font-bold">
          Password :
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required="required"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-gray-500/50"
        />
        <div className="error"></div>
        <input
          type="submit"
          id="inscription"
          value={"Inscription"}
          className="relative flex w-full justify-center rounded-md border border-transparent bg-stone-600 py-2 px-4 text-sm font-medium text-white hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
        />
      </form>
    </div>
  );
};

export default Inscription;
