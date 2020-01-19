import React from "react";

function Message(props) {
  const { index, message } = props;
  return <li key={index}>{message.content}</li>;
}

export default Message;
