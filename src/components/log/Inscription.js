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
    
    axios.post('http://localhost:8080/api/user/signup', {
      username,
      email,
      password
    },{withCredentials: true})
    .then((res) => {
      window.location = '/'
    })
    .catch((err) => {
      errorMessage.innerHTML = err.response.data.errors[0].message;
    });
  }

  return (
    <div>
      <hgroup>
        <h2>Welcome !</h2>
        <p>Entrez vos informations pour creer votre compte</p>
      </hgroup>

      <form
        action=""
        onSubmit={handleLogin}
        id="inscription-form"
        className="log-form"
      >
        <div className="group log-input">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required = 'required'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="group log-input">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required = 'required'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="group log-input">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required = 'required'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="error"></div>
        <div>
          <input type="submit" id="inscription" value={"Inscription"} />
        </div>
      </form>
    </div>
  );
};

export default Inscription;
