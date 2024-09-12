import React, { useState, createContext, useEffect } from "react";

const Context = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [kartica, setKartica] = useState([]);

  const [editKartica, setEditKartica] = useState({
    kartica: {},
    edit: false,
  });

  const editFeedback = (kartica) => {
    setEditKartica({
      kartica,
      edit: true,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/kartice")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Niste dohvatili podatke");
        }
        return res.json();
      })
      .then((data) => {
        setKartica(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Greška", error);
      });
  }, []);

  const updateFeedback = async (id, updateKartice) => {
    const res = await fetch(`http://localhost:3000/kartice/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateKartice),
    });

    const data = await res.json();
    setKartica(kartica.map((karta) => (karta.id === id ? { ...karta, ...data } : karta)));
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/kartice/${id}`, { method: "DELETE" });
    setKartica(kartica.filter((item) => item.id !== id));
  };

  const handleFeedback = async (unos) => {
    const res = await fetch("http://localhost:3000/kartice", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(unos),
    });
    const data = await res.json();
    setKartica([data, ...kartica]);
  };

  return (
    <Context.Provider
      value={{
        kartica,
        editKartica,
        isLoading,
        handleDelete,
        handleFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
