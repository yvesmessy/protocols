const Web3 = require("web3");
const fs = require("fs");
const PrivateKeyProvider = require("truffle-privatekey-provider");

const privateKey = "7c71142c72a019568cf848ac7b805d21f2e0fd8bc341e8314580de11c6a397bf";
const localUrl = "http://localhost:8545";
const provider = new PrivateKeyProvider(privateKey, localUrl);

const web3 = new Web3(provider);

async function sendTx(abiFile, contractAddress, methodName, ...params) {
  const owner = (await web3.eth.getAccounts())[0];
  const sendOpt = {from: owner, gasPrice: 1e9, gasLimit: 120000};
  // console.log("sendOpt:", sendOpt);

  const contract = new web3.eth.Contract(
    JSON.parse(fs.readFileSync(abiFile, "ascii")),
    contractAddress
  );

  await contract.methods[methodName](...params).send(sendOpt);
  // console.log("done.");
}

async function deposit(from) {
  try {
    await sendTx(
      "ABI/version36/ExchangeV3.abi",
      "0x1090B9813DF54d1F03dB5596939b69DC89ba1Be4",
      "deposit",
      from,
      from,
      "0x" + "00".repeat(20),
      "0",
      []
    );
      
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("blockNumber:", blockNumber);
      
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

deposit("0xE20cF871f1646d8651ee9dC95AAB1d93160b3467");
