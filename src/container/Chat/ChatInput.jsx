import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({
  addNewMessage,
  setJsonData,
  isLoading,
  setLoading,
  userId,
  compositionWidth,
  compositionHeight,
  updateFailedMessageStatus,
}) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    addNewMessage(message);
    getData();
    setMessage("");
  };

  async function getData(isReset = false) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://bff0-103-181-238-106.ngrok-free.app/generate-response?prompt=${message} VIEWPORT:width:${compositionWidth},height:${compositionHeight} ${
          isReset ? "&reset=true" : ""
        }&userId=${userId}`,
        {
          method: "GET",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        }
      );
      const data = await response?.json();
      setJsonData(data);
    } catch {
      updateFailedMessageStatus();
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col space-y-2">
      <TextField
        className="bg-gradient-to-b from-[#C167F6] to-[#5548C7] rounded-full text-red !px-4 !py-2"
        fullWidth
        variant="standard"
        placeholder="Start typing here..."
        value={message}
        onChange={handleMessageChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && message && !isLoading) {
            handleSendMessage();
          }
        }}
        InputProps={{
          style: { color: "white", borderBottom: "none" },
          endAdornment: (
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              aria-label="send message"
              disabled={!message || isLoading}
            >
              <SendIcon />
            </IconButton>
          ),
        }}
        InputLabelProps={{
          shrink: false, // Prevent the label from floating
        }}
      />
      {/* <button
        className="mr-12 bg-gray-300 font-normal text-sm px-4 py-2 rounded w-full text-white"
        onClick={() => {
          addNewMessage("", true);
          getData(true);
          setMessage("");
        }}
      >
        Reset Chat
      </button> */}
    </div>
  );
};

export default ChatInput;
