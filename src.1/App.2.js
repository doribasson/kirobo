import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    // checkDevice();
    const myDevice = deviceName();
    console.log(myDevice);

    // const myview = findView();
    // console.log(myview, "myview");
  }, []);

  // const device = {
  //   iPad: /iPad/.test(ua),
  //   iPhone: /iPhone/.test(ua),
  //   Android: /Android/.test(ua)
  // }
  console.log(navigator.userAgent);
  // console.log(device);

  const deviceName = () => {
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

  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
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

  return (
    <div className="App">
      <p>Edit</p>
    </div>
  );
}

export default App;
