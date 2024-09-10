import { useState, useContext } from "react";
import Context from "../Context/Context";
import Card from "../shared/Card";
import Button from "../shared/Button";
import Rating from "./Rating";

const KarticaForma = () => {
  const { handleFeedback } = useContext(Context);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [poruka, setPoruka] = useState("");
  const [rating, setRating] = useState(1);
  const handleTextChange = (event) => {
    const provjera = event.target.value;
    setText(provjera);
    if (provjera === "") {
      setBtnDisabled(true);
      setPoruka(null);
    } else if (provjera.trim().length < 6) {
      setPoruka("Mora biti barem 6 slova");
      setBtnDisabled(true);
    } else {
      setPoruka(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noviUnos = {
      text,
      rating,
    };

    handleFeedback(noviUnos);
    setText("");
  };

  return (
    <Card>
      <form action="#" className="input-forma" onSubmit={handleSubmit}>
        <p>Molimo unesite novu karticu:</p>
        <Rating odabran={(rating) => setRating(rating)} />
        <div className="input-grupa">
          <input type="text" placeholder="Unesite tekst" value={text} onChange={handleTextChange} />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Pošalji
          </Button>
        </div>
        {poruka && <p className="poruka">{poruka}</p>}
      </form>
    </Card>
  );
};

export default KarticaForma;
