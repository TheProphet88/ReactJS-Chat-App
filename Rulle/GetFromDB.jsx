import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const GetFromDB = () => {
  const [dataFromDB, setDataFromDb] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "userData"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const userDB = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDataFromDb(userDB);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      {dataFromDB.map((singledb) => (
        <div key={singledb.id}>
          <p>{singledb.name}</p>
          <p>{singledb.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GetFromDB;
