import loader from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={loader}
      alt="Učitava se..."
      style={{ width: "150px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
