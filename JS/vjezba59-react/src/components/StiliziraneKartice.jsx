import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Context from "../Context/Context";

const StiliziraneKartice = ({ item }) => {
  const { handleDelete, editFeedback } = useContext(Context);

  const handleClick = () => {
    handleDelete(item.id);
  };

  const handleEdit = () => {
    editFeedback(item);
  };

  return (
    <Card flip={true}>
      <div className="text-display">{item.text}</div>
      <div className="rating">{item.rating}</div>
      <button className="edit" onClick={handleEdit}>
        <FaEdit />
      </button>
      <button className="close" onClick={handleClick}>
        <FaTimes />
      </button>
    </Card>
  );
};

export default StiliziraneKartice;
