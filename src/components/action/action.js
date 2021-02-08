var ethers = require("ethers");

export const devicefun = (path, str) => {
  let obj = {
    hostType: "desktop-browser",
    deviceType: "desktop",
    deviceName: "pc"
  };
  const ua = navigator.userAgent;

  if (/(wv|; wv)/.test(ua)) {
    obj.hostType = "mobile-webview";
    obj.deviceType = "mobile";
    obj.deviceName = "android";
    return obj;
  }

  if (/(Mobile|Mobile\/)(?!.*Safari)/.test(ua)) {
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

export const onSubmit = (e, mnemonic, path, { setResValue, resValue }) => {
  e.preventDefault();
  console.log(resValue);

  // let mnemonic = mnemonic;
  // ("head front exchange february install palm casino female purchase badge short fancy");
  // let path = "m/44'/60'/0'/0/0";
  // console.log(mnemonic);

  console.log(path);

  const getUsers = async () => {
    try {
      let secondMnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic, path);
      let res = await secondMnemonicWallet.getAddress();
      setResValue(res);
      console.log(res);
    } catch (err) {
      alert("error... pls enter valid mnemonic and path ");
      console.error(err, { msg: "error mnemonic or path" });
    }
  };
  getUsers();
};
