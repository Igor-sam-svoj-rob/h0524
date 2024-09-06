const Button = ({ type, isDisabled, version, children }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
