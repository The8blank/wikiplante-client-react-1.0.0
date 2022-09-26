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
    <div>
      <p>Entrez vos informations pour vous connecter à votre compte</p>
      <form onSubmit={handleLogin} id="connexion-form" className="log-form">
        <div className="group log-input">
          <label htmlFor="Email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="group log-input">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="error"></div>
        <div>
          <input type="submit" id="connexion-btn" value={"Se connecter"} />
        </div>
      </form>
    </div>
  );
};

export default Connexion;
