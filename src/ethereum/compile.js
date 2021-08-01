/* eslint-disable guard-for-in */
const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const shopPath = path.resolve(__dirname, 'contracts', 'BitGudReward.sol')
const source = fs.readFileSync(shopPath, 'utf8')
const input = {
  language: 'Solidity',
  sources: {
    BitGudReward: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode'],
      },
    },
  },
}

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts.BitGudReward

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)
fs.ensureDirSync(buildPath)

// eslint-disable-next-line no-restricted-syntax
for (const item in output) {
  fs.outputJSONSync(path.resolve(buildPath, `${item}.json`), output[item])
}
