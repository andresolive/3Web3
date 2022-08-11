// https://eth-ropsten.alchemyapi.io/v2/lVTnECNnIIAe75lIJtJIdKqaBsBtQXGt

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/lVTnECNnIIAe75lIJtJIdKqaBsBtQXGt',
      accounts: [ 'a7e2887fc120327bce90de27a857b1c9347ed75ffa4b94681290721f366cbb51' ]
    }
  }
}