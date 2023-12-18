import "./style.css";
// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder }) => {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
