import { useState, useEffect, useCallback } from "react";

const Counter = ({ korak }) => {
  const [brojac, setBrojac] = useState(0);

  const uvecaj = useCallback(() => {
    setBrojac((prevBrojac) => prevBrojac + 1);
  }, [korak]);

  const umanji = useCallback(() => {
    setBrojac((prevBrojac) => prevBrojac - 1);
  }, [korak]);

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
