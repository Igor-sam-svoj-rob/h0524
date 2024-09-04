import Card from "../shared/Card";
import { FaTimes } from "react-icons/fa";

const StiliziraneKartice = ({ item, handleDelete }) => {
  const handleClick = () => {
    handleDelete(item.id);
  };

  return (
    <Card flip={true}>
      <div className="rating">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="close" onClick={handleClick}>
        <FaTimes />
      </button>
    </Card>
  );
};

export default StiliziraneKartice;
