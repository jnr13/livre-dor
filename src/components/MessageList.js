import React from "react";
import Message from "./Message";

function MessageList(props) {
  const { messages } = props;

  return (
    <ul>
      {messages &&
        messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
    </ul>
  );
}

export default MessageList;
