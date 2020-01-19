import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  let history = useHistory();

  const postLogin = () => {
    if (username === null || password === null) return;

    axios
      .post("https://livredor-api.herokuapp.com/login", {
        username: username,
        password: password
      })
      .then(response => {
        Cookie.set("token", response.data.token);
        history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        placeholder="username"
        type="text"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={postLogin}>Login</button>
    </div>
  );
}

export default Login;
