import React from "react";
import SaveInDB from "./SaveInDB";
import GetFromDB from "./GetFromDB";

const MessageBox = () => {
  return (
    <div>
      <SaveInDB />
      <GetFromDB />
    </div>
  );
};

export default MessageBox;
