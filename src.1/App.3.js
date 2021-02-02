import React, { useState, useEffect } from "react";

function App() {
  const [myDevice, setDevice] = useState({});
  useEffect(() => {
    const myDevice = devicefun();
    setDevice(myDevice);
    console.log(myDevice);
  }, []);

  console.log(navigator.userAgent);
  const devicefun = () => {
    let obj = {
      hostType: "desktop-browser",
      deviceType: "desktop",
      deviceName: "pc"
    };
    const ua = navigator.userAgent;
    if (/(wv)/.test(ua)) {
      obj.hostType = "mobile-webview";
      obj.deviceType = "mobile";
      obj.deviceName = "android";
      return obj;
    }

    if (/(Mobile)(?!.*Safari)/.test(ua)) {
      obj.hostType = "mobile-webview";
      obj.deviceType = "mobile";
      obj.deviceName = "iphone";
      return obj;
    }
    if (/(iPad)/.test(ua)) {
      obj.hostType = "mobile-browser";
      obj.deviceType = "mobile";
      obj.deviceName = "iphone";
      return obj;
    }
    if (/(iPod)/i.test(ua)) {
      obj.hostType = "iPod";
      obj.deviceType = "iPod";
      obj.deviceName = "iPod";
      return obj;
    }
    if (/(Android)/.test(ua)) {
      obj.hostType = "mobile-browser";
      obj.deviceType = "mobile";
      obj.deviceName = "android";
      return obj;
    }
    return obj;
  };

  // const findView = () => {
  //   const str = "addasdas skfdskd;sfl fdddf wv";
  //   const arr = ["wv", "Mobile", "iPhone", "iPad", "iPod", "Android"];
  //   let temp;
  //   const device = navigator.userAgent;

  //   arr.forEach(item => {
  //     if (device.includes(item)) temp = item;
  //   });
  //   return temp;
  // };
  // const isWebView = navigator.userAgent.includes("wv");

  const { hostType, deviceType, deviceName } = myDevice;
  return (
    <div className="container">
      <div className="card1">
        <p>{`Host type: ${hostType}`}</p>
        <p>{`Device type: ${deviceType}`}</p>
        <p>{`Device name: ${deviceName}`}</p>
      </div>

      <div className="card2">
        <form className="form" action="">
          {/* <input type="text" placeholder="type" />
        <input type="text" placeholder="type" /> */}

          <input
            type="text"
            name="name"
            id="name"
            class="aks-input"
            placeholder="Type user to get mnemonic "
          />

          <input
            type="text"
            name="path"
            id="path"
            class="aks-input"
            placeholder="Type user to get path"
          />
          <button id="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
