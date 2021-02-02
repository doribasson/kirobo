import React, { useState, useEffect } from "react";
const Web3API = require("web3");
var bip39 = require("bip39");

function App() {
  const [myDevice, setDevice] = useState({});
  const [str, setStr] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    const myDevice = devicefun();
    setDevice(myDevice);
    console.log(myDevice);
  }, []);

  console.log(navigator.userAgent);

  const onSubmit = e => {
    e.preventDefault();
    console.log("check");
    console.log(str);
    console.log(path);
    // const mnemonic = bip39.generateMnemonic();

    if (path === "bip39" && str) {
      const mnemonic = bip39.mnemonicToSeedSync(str).toString("hex");
      console.log(mnemonic);

      const web3 = new Web3API(
        new Web3API.providers.HttpProvider("https://mainnet.infura.io")
      );
      let account = web3.eth.accounts.create(web3.utils.randomHex(32));
      let wallet = web3.eth.accounts.wallet.add(account);
      let keystore = wallet.encrypt(web3.utils.randomHex(32));
      console.log({
        account: account,
        wallet: wallet,
        keystore: keystore
      });

      console.log(Web3API);
      console.log(str);
    } else alert("Must type bip39 in the path ");
  };

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
        <form className="login-form" onSubmit={onSubmit}>
          <div className="input-floating-label">
            <input
              className="input"
              type="text"
              id="input"
              name="input"
              placeholder="Mnemonic"
              value={str}
              onChange={e => setStr(e.target.value)}
              required
            />
            <label htmlFor="input">Mnemonic</label>
            <span className="focus-bg"></span>
          </div>
          <div className="input-floating-label">
            <input
              className="input"
              type="text"
              id="path"
              name="path"
              placeholder="Path"
              onChange={e => setPath(e.target.value)}
              value={path}
            />
            <label htmlFor="input">Path</label>
            <span className="focus-bg"></span>
          </div>
          <button id="submit" className="btn-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
