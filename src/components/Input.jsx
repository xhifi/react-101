import { useId } from "react";

const Input = ({ type = "text", label, placeholder, rows = 4 }) => {
  const uuid = useId();

  if (type === "textarea") {
    return (
      <div className="mb-3">
        <label htmlFor={uuid} className="form-label">
          {label}
        </label>
        <textarea
          className="form-control"
          placeholder={placeholder}
          id={uuid}
          rows={rows}
        ></textarea>
      </div>
    );
  }

  return (
    <div className="mb-3">
      <label htmlFor={uuid} className="form-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="form-control"
        id={uuid}
      />
    </div>
  );
};

export default Input;
