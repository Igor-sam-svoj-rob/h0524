import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = createContext();

export const FeedbackProvider = ({ children }) => {
  const [kartica, setKartica] = useState([
    { id: 1, rating: 4, text: "lorem ipsum dolor1" },
    { id: 2, rating: 2, text: "lorem ipsum dolor2" },
    { id: 3, rating: 1, text: "lorem ipsum dolor3" },
    { id: 4, rating: 3, text: "lorem ipsum dolor4" },
    { id: 5, rating: 5, text: "lorem ipsum dolor5" },
    { id: 6, rating: 4, text: "lorem ipsum dolor6" },
  ]);

  const handleDelete = (id) => {
    setKartica(kartica.filter((item) => item.id != id));
  };

  const handleFeedback = (unos) => {
    unos.id = uuidv4();
    setKartica([unos, ...kartica]);
  };

  return (
    <Context.Provider value={{ kartica, handleDelete, handleFeedback }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
