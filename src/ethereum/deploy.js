const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

const BitGudReward = require('./build/BitGudReward.json')

const MNEMONIC = ''
const PROVIDER_LINK = ''

const provider = new HDWalletProvider(MNEMONIC, PROVIDER_LINK)
const web3 = new Web3(provider)

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts()

    const result = await new web3.eth.Contract(BitGudReward.abi)
      .deploy({ data: BitGudReward.evm.bytecode.object })
      .send({ gas: '2000000', from: accounts[0], value: web3.utils.toWei('1', 'ether') })

    console.log('ADDRESS:')
    console.log(result.options.address)
  } catch (error) {
    console.log(error)
  }
}

deploy()
