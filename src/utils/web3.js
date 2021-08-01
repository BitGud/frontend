const bitGudReward = require('../ethereum/build/BitGudReward.json')

const { default: web3 } = require('../ethereum/web3')

const SMART_CONTRACT_ADDRESS = '0xb905d4c8dc9d0278e11f31036fcd69e0f82beb14'

const getDeployedFactory = async () => {
  const factory = await new web3.eth.Contract(bitGudReward.abi, SMART_CONTRACT_ADDRESS)

  return factory
}

getDeployedFactory()
