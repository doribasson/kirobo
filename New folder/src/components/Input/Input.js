import React from "react";
import "./input.css";

const Input = ({
  className,
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  span,
  label
}) => {
  return (
    <div className="input-floating-label">
      <input
        className={className}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        span={span}
        label={label}
        required
      />

      <label htmlFor="input">{label}</label>
      <span className={span}></span>
    </div>
  );
};

export default Input;
