import { useState, useEffect } from "react";

const Counter = () => {
  const [brojac, setBrojac] = useState(0);

  const uvecaj = () => {
    setBrojac((prevBrojac) => prevBrojac + 1);
  };

  const umanji = () => {
    setBrojac((prevBrojac) => prevBrojac - 1);
  };

  useEffect(() => {
    console.log(brojac);
  }, [brojac]);

  return (
    <>
      <button onClick={umanji}>Umanji za 1</button>
      <div>{brojac}</div>
      <button onClick={uvecaj}>Povećaj za 1</button>
    </>
  );
};

export default Counter;
