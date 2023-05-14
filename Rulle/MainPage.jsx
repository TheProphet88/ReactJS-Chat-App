import React from "react";
import Logins from "./Regist";
import Logsout from "./Logsout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import MessageBox from "./MessageBox";

const MainPage = () => {
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <div className="mainChild">
          <Logins />
          <Logsout />
          <MessageBox />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
