import React, { useState, useEffect } from "react";
import Form from "../src/components/form/Form";
import Card1 from "../src/components/cards/Card1";
import { devicefun, onSubmit } from "./components/action/action";

function App() {
  const [myDevice, setDevice] = useState({});
  const [str, setStr] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    const myDevice = e => devicefun(path, str);
    setDevice(myDevice);
    // console.log(myDevice);
    // console.log(navigator.userAgent);
    // const { hostType, deviceType, deviceName } = myDevice;
  }, [path, str]);

  return (
    <div className="container">
      <Card1 myDevice={myDevice} />
      <Form
        onChangeStr={e => setStr(e.target.value)}
        onChangePath={e => setPath(e.target.value)}
        onSubmit={e => onSubmit(e, str, path)}
        valueStr={str}
        valuePath={path}
      />
    </div>
  );
}

export default App;
