import { useState, useContext, useEffect } from "react";
import Context from "../Context/Context";

const Rating = ({ odabran }) => {
  const [odabrano, setOdabrano] = useState(1);
  const { editKartica } = useContext(Context);
  const handleChange = (e) => {
    setOdabrano(+e.target.value);
    odabran(+e.target.value);
  };

  useEffect(() => {
    setOdabrano(editKartica.kartica.rating);
  }, [editKartica]);

  return (
    <ul className="ocjena">
      <li>
        <label htmlFor="broj1" className="form-control">
          <input
            type="radio"
            id="broj1"
            name="rating"
            value="1"
            onChange={handleChange}
            checked={odabrano === 1}
          />
          1
        </label>
      </li>
      <li>
        <label htmlFor="broj2" className="form-control">
          <input
            type="radio"
            id="broj2"
            name="rating"
            value="2"
            onChange={handleChange}
            checked={odabrano === 2}
          />
          2
        </label>
      </li>
      <li>
        <label htmlFor="broj3" className="form-control">
          <input
            type="radio"
            id="broj3"
            name="rating"
            value="3"
            onChange={handleChange}
            checked={odabrano === 3}
          />
          3
        </label>
      </li>
    </ul>
  );
};

export default Rating;
