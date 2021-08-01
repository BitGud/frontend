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

const connectWalletReward = async () => {
  loadWeb3()

  if (window.web3) {
    const address = await window.web3.eth.getAccounts()
    const rewards = await new web3.eth.Contract(bitGudReward.abi, SMART_CONTRACT_ADDRESS)

    const privateKey = 'f060df71735e02b6de19e1ac3347aad31f73d20c90c8cbd6ba1a5eaee9ac055f'
    const account = web3.eth.accounts.privateKeyToAccount(`0x${privateKey}`)

    console.log(account)

    console.log(rewards.methods.sendRewards(address).send)

    const receiver = await rewards.methods.sendRewards(address).send({
      from: account.address,
      gasLimit: web3.utils.toHex('5000000'),
      gasPrice: web3.utils.toHex('100000000000'),
    })

    console.log(receiver)
  }
}

export default connectWalletReward
