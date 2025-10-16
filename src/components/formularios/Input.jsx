//(value) => RegExp.test(value)

export const Input = ({
  type = "text",
  label,
  name,
  handleChange,
  value,
  validate = () => {},
}) => {
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor={label}>
        {label}
      </label>
      <input
        className={`form-control ${
          validate(value) ? "border-success" : "border-danger"
        }`}
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
