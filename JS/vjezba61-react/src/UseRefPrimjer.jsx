import { useState, useRef } from "react";
import zvuk from "./assets/zvuk.wav";

const UseRefPrimjer = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const renders = useRef(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    /* Dohvaćamo i spremamo vrijednost input polja koristeći ref hook */
    const currentInputValue = inputRef.current.value;
    setInputValue(currentInputValue);
    inputRef.current.value = "";
    renders.current++;
  };

  const handlePlayClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Unesite nešto..." />
      <button onClick={handleButtonClick}>Dobavi i ažuriraj vrijednost</button>
      <p>Trenutna vrijednost input polja: {inputValue}</p>
      <p>Broj renderiranja: {renders.current}</p>

      <audio src={zvuk} ref={audioRef}></audio>
      <button onClick={handlePlayClick}>{isPlaying ? "Pauziraj zvuk" : "Pokreni zvuk"}</button>
    </div>
  );
};

export default UseRefPrimjer;
