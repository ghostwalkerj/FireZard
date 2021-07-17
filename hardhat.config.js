const { task } = require("hardhat/config");

require("hardhat-deploy-ethers");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');

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
          privateKey: "0xe87d780e4c31c953a68aef2763df56599c9cfe73df4740fc24c2d0f5acd21bae"
        },
        {
          balance: "10000000000000000000000",
          privateKey: "0x7f8ecae56a570cb3746d0ff03ad020a06cc30c6c223515e6c1e5c9e95c3b1672"
        }
      ],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      gas: 2100000,
      accounts: ["e87d780e4c31c953a68aef2763df56599c9cfe73df4740fc24c2d0f5acd21bae"]
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      gas: 2100000,
      accounts: ["eda3b56f8d985305b70ff10f06f8b50a24c02404e5f461fefc611611a53fe5f9"]
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
};
