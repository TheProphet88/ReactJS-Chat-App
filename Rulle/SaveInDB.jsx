import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SaveInDB = () => {
  const [inputData, setinputData] = useState("");

  const handleData = (e) => {
    setinputData(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    try {
      await addDoc(collection(db, "userData"), {
        text: inputData,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="buttonContainer">
      <div className="buttonWrapper">
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Send Message"
            onChange={handleData}
            value={inputData}
          />
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default SaveInDB;
