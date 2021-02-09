import React from "react";
import "./form.css";
import Input from "../input/Input";

const Form = ({ onSubmit, onChangePath, onChangeStr, str, path, resValue }) => {
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
      <h3>{`the address: ${resValue}`}</h3>
    </div>
  );
};

export default Form;
