const { task } = require("hardhat/config");

require("hardhat-deploy-ethers");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();


const API_KEY = process.env.ETHERSCAN_API_KEY;
const PRIVATE_KEY_1 = process.env.PRIVATE_KEY_1;
const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2;
const MAINNET_KEY = process.env.MAINNET_KEY;


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);

  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  paths: {
    "tests": "./frontend/test/"
  },
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: [
        {
          balance: "10000000000000000000000",
          privateKey: PRIVATE_KEY_1
        },
        {
          balance: "10000000000000000000000",
          privateKey: PRIVATE_KEY_2
        }
      ],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      gas: 2100000,
      accounts: [PRIVATE_KEY_1]
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      gas: 2100000,
      accounts: [MAINNET_KEY]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 50,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 50,
          },
        },
      },
    ],
  },

   etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: API_KEY
  },
};
