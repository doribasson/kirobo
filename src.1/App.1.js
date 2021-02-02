import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    checkDevice();
    const myDeviceName = deviceName();
    console.log(myDeviceName);

    const str = getDeviceType();
    console.log(str);

    const myview = findView();
    console.log(myview, "myview");
  }, []);

  // const device = {
  //   iPad: /iPad/.test(ua),
  //   iPhone: /iPhone/.test(ua),
  //   Android: /Android/.test(ua)
  // }
  console.log(navigator.userAgent);
  // console.log(device);

  const deviceName = () => {
    const ua = navigator.userAgent;
    if (/(iphone)/i.test(ua)) {
      return "iPhone";
    }
    if (/(ipad)/i.test(ua)) {
      return "iPad";
    }
    if (/(android)/i.test(ua)) {
      return "android";
    }
    // if (/(windows)/i.test(ua)) {
    //   return "windows";
    // }
    if (/^\w+$/.test(undefined)) {
      return "none";
    }
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

  const checkDevice = () => {
    const device = window.navigator.userAgent;
    console.log(device);

    const findTerm = term => {
      if (device.includes(term)) {
        return device;
      }
    };

    switch (device) {
      case findTerm("Mo"):
        // searchWithGoogle();
        console.log(";wv");
        break;

      case findTerm("Mobile/"):
        // searchWithYahoo();
        console.log("iphone");
        break;

      case findTerm("ipad"):
        // searchWithYahoo();
        console.log("iphone");
        break;

      case findTerm("ipod"):
        // searchWithYahoo();
        console.log("Android");
        break;
      default:
        console.log("No search engine found");
    }
  };
  //   console.log(typeof window.navigator.userAgent);
  //   console.log(window.navigator.userAgent);
  //   const device = window.navigator.userAgent;
  //   console.log(device.indexOf("Mo"));
  //   switch (true) {
  //     case device:
  //       console.log("Case 1");
  //       break;

  //     case device:
  //       console.log("Case 2d");
  //       break;

  //     case device:
  //       console.log("Case 2s");
  //       break;

  //     case device:
  //       console.log("Case 2");
  //       break;
  //     case device:
  //       console.log("Case 2");
  //       break;
  //     case device:
  //       console.log("Case 2");
  //       break;
  //   }
  // };

  // const checkDevice = () => {
  //   console.log(typeof window.navigator.userAgent);
  //   console.log(window.navigator.userAgent);
  //   const device = window.navigator.userAgent;
  //   console.log(device.indexOf("Mo"));
  //   switch (true) {
  //     case /;wv/i.test(device):
  //       console.log("Case 1");
  //       break;

  //     case /Mobile/i.test(device):
  //       console.log("Case 2d");
  //       break;

  //     case /iPhone/i.test(device):
  //       console.log("Case 2s");
  //       break;

  //     case /iPad/i.test(device):
  //       console.log("Case 2");
  //       break;
  //     case /iPod/i.test(device):
  //       console.log("Case 2");
  //       break;
  //     case /Android/i.test(device):
  //       console.log("Case 2");
  //       break;

  //     default:
  //       console.log("ERROR No Case provided for: " + device);
  //   }
  // };

  // const checkDevice = () => {
  //   console.log(typeof window.navigator.userAgent);
  //   console.log(window.navigator.userAgent);
  //   const device = window.navigator.userAgent;
  //   switch (device) {
  //     case device.includes("Win"):
  //       console.log("yeaaa");
  //       break;
  //     case device.includes("xcxcx"):
  //       console.log("no");
  //       break;
  //     default:
  //       console.log("no");
  //   }
  // };

  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some(toMatchItem => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  const findView = () => {
    const str = "addasdas skfdskd;sfl fdddf wv";
    const arr = ["wv", "Mobile", "iPhone", "iPad", "iPod", "Android"];
    let temp;
    const device = navigator.userAgent;

    arr.forEach(item => {
      if (device.includes(item)) temp = item;
      // return item;
      // if (navigator.userAgent.includes(item))
    });
    console.log(temp);
    return temp;
  };
  // const isWebView = navigator.userAgent.includes("wv");

  return (
    <div className="App">
      <p>Edit</p>
    </div>
  );
}

export default App;
