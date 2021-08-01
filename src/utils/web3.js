import Web3 from 'web3'

const bitGudReward = require('../ethereum/build/BitGudReward.json')

const { default: web3 } = require('../ethereum/web3')

const SMART_CONTRACT_ADDRESS = '0xb905d4c8dc9d0278e11f31036fcd69e0f82beb14'
const gasLimit = '2100000'
const gasPrice = '6000000000'

const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}

const getDeployedFactory = async (address) => {
  // const factory = await new web3.eth.Contract(bitGudReward.abi, SMART_CONTRACT_ADDRESS)

  // const privateKey = 'f060df71735e02b6de19e1ac3347aad31f73d20c90c8cbd6ba1a5eaee9ac055f'
  // const account = web3.eth.accounts.privateKeyToAccount(`0x${privateKey}`)

  // web3.eth.accounts.wallet.add(account)
  // web3.eth.defaultAccount = account.address

  // const receiver = await factory.methods.requesters(address).call()
  // console.log(receiver)

  loadWeb3()
}

export default getDeployedFactory
