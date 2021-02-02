import React from "react";
import "./form.css";
import Input from "../Input/Input";

const Form = ({
  onSubmit,
  value,
  onChangePath,
  onChangeStr,
  required,
  str,
  path
}) => {
  return (
    <div className="card2">
      <form className="login-form" onSubmit={onSubmit}>
        <Input
          className={"input"}
          id={"input"}
          value={str}
          name={"str"}
          placeholder={"Mnemonic"}
          onChange={onChangeStr}
          required
          type={"text"}
        />

        <div className="input-floating-label">
          <Input
            className={"input"}
            type={"text"}
            id={"input"}
            name={"path"}
            value={path}
            placeholder={"Path"}
            onChange={onChangePath}
            required
          />
        </div>
        <button id="submit" className="btn-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
