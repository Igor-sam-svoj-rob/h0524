const HelloFn = (props) => {
  return (
    <div>
      Dobar dan {props.ime} {props.prezime}.
      <br />
      {props.children}
    </div>
  );
};

export default HelloFn;
