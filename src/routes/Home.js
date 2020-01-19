import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";
import { MessageList } from "../components";

function Home() {
  const [messages, setMessages] = useState(null);
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState(Cookie.get("token") || null);

  const fetchMessages = () => {
    axios
      .get("https://livredor-api.herokuapp.com/messages")
      .then(response => {
        setMessages(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const sendMessage = () => {
    axios
      .post(
        "https://livredor-api.herokuapp.com/message",
        {
          content: message
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setMessage(null);
        fetchMessages();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const logout = () => {
    Cookie.remove("token");
    setToken(null);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <>
      <MessageList messages={messages} />
      {token && (
        <>
          <input
            placeholder="message"
            onChange={e => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Envoyer</button>
        </>
      )}
      {token && <button onClick={logout}>Logout</button>}
      {!token && <Link to="/signup">Signup</Link>}
      {!token && <Link to="/login">Login</Link>}
    </>
  );
}

export default Home;
