import React from "react";
import "./card2.css";

const Card2 = ({ onSubmit }) => {
  return (
    <div className="card2">
      <form className="login-form" onSubmit={onSubmit}>
        <div className="input-floating-label">
          <Input
            className="input"
            type="text"
            id="input"
            name="input"
            placeholder="Mnemonic"
            value={str}
            onChange={e => setStr(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Card2;
