const Web3API = require("web3");
var bip39 = require("bip39");

export const devicefun = (path, str) => {
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

export const onSubmit = (e, str, path) => {
  e.preventDefault();
  // const mnemonic = bip39.generateMnemonic();
  //   console.log(str);
  if (path === "bip39" && str) {
    const mnemonic = bip39.mnemonicToSeedSync(str).toString("hex");
    console.log(mnemonic);

    const web3 = new Web3API(
      new Web3API.providers.HttpProvider("https://mainnet.infura.io")
    );
    let account = web3.eth.accounts.create(mnemonic);
    let wallet = web3.eth.accounts.wallet.add(account);
    let keystore = wallet.encrypt(mnemonic);
    console.log({
      account: account,
      wallet: wallet,
      keystore: keystore
    });

    // console.log(Web3API);
    // console.log(str);
  } else alert("Must type bip39 in the path ");
};
