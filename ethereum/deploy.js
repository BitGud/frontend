const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const BitGudReward = require("./build/BitGudReward.json");

const MNEMONIC =
  "insane common suffer tilt multiply offer bus dolphin train skull cluster weekend";
const PROVIDER_LINK =
  "https://rinkeby.infura.io/v3/1173fa0d86194fc5894d8fca29d380be"; 

const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.PROVIDER_LINK);
const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(BitGudReward.abi)
      .deploy({ data: BitGudReward.evm.bytecode.object })
      .send({ gas: "2000000", from: accounts[0] });

    console.log("ADDRESS:");
    console.log(result.options.address);
  } catch (error) {
    console.log(error);
  }
};

deploy();