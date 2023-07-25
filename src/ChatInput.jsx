import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
// IMPORT FIREBASE DATA BASE COLLECTION

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    width: 60%;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setinput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    // USE FIRE BASE DATA BASE TO PULL MESSAGES,ROOM ID's and etc.
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
    setinput("");
  };

  return (
    <ChatInputContainer>
      <form action="#">
        <input
          onChange={(e) => setinput(e.target.value)}
          value={input}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <Button onClick={sendMessage} type="submit">
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
