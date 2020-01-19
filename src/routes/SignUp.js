import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

function SignUp() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);
  let history = useHistory();

  const postSignUp = () => {
    if (username === null || password === null || checkPassword !== password)
      return;

    axios
      .post("https://livredor-api.herokuapp.com/signup", {
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
      <input
        placeholder="password"
        type="password"
        onChange={e => setCheckPassword(e.target.value)}
      />
      <button onClick={postSignUp}>SignUp</button>
    </div>
  );
}

export default SignUp;
