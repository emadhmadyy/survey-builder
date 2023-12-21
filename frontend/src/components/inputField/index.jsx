import "./style.css";
// eslint-disable-next-line react/prop-types
const Input = ({ type, placeholder, value, onChange, error }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };
  return (
    <>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default Input;
