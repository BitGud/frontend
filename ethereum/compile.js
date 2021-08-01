const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const shopPath = path.resolve(__dirname, "contracts", "BitGudReward.sol");
const source = fs.readFileSync(shopPath, "utf8");
var input = {
  language: "Solidity",
  sources: {
    BitGudReward: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};

var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts
  .BitGudReward;

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);
fs.ensureDirSync(buildPath);

console.log(output)

fs.outputJSONSync(
  path.resolve(buildPath, onoutputlineShop + ".json")
);