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
    <div>
      <p>Entrez vos informations pour creer votre compte</p>

      <form
        onSubmit={handleLogin}
        id="inscription-form"
        className="space-y-5 rounded flex flex-col mt-5 text-start"
      >
        <div className="space-y-2">
          <label htmlFor="username" className="font-bold ">
            Username :
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required="required"
            onChange={(e) => setUsername(e.target.value)}
            className="bg-slate-200/50 appearance-none border-2 border-slate-200/50 rounded w-full py-1 px-1 text-slate-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-slate-500/50"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="Email" className="font-bold ">
            Email :
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required="required"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200/50 appearance-none border-2 border-gray-200/50 rounded w-full py-1 px-2 text-slate-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-slate-500/50"
          />
        </div>
        <div className="space-y-2">
        <label htmlFor="password" className="font-bold ">
          Password :
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required="required"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-slate-200/50 appearance-none border-2 border-slate-200/50 rounded w-full py-1 px-2 text-slate-700 leading-tight focus:outline-none focus:bg-white/50 focus:border-slate-500/50"
        />
        </div>
        <div className="space-y-2">
        <div className="error"></div>
        <input
          type="submit"
          id="inscription-btn"
          value={"Inscription"}
          className="relative flex w-full justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        />
        </div>
      </form>
    </div>
  );
};

export default Inscription;
