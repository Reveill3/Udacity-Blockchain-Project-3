let HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv');
let mnemonic = process.env.SEED_PHRASE;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
        provider: function() { 
         return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/04089ba43dd24561a92d96351247155f");
        },
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
    }
   }
  },
  compilers: {
    solc: {
      version: '^0.4.23',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};