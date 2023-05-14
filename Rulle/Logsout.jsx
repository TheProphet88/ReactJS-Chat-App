import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Logsout = () => {
  const googleLogOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={googleLogOut}> Log out </button>
    </div>
  );
};

export default Logsout;
