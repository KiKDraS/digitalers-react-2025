//...rest -> rest operator -> spread operator para trabajar con valores restantes dinámicos
export const Input = ({ name, label, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input id={name} name={name} className="form-control" {...rest} />
    </div>
  );
};

/*
    function Input(name) {
        console.log(name);
    }

    Input("Pepe");
*/
