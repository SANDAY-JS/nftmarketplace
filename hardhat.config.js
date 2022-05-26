require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    near: {
      // url: "https://mainnet.infura.io/v3/14b7a223c6b344e29dea4d1e33e0929a",
      url: "https://near-testnet.infura.io/v3/14b7a223c6b344e29dea4d1e33e0929a",
      accounts: [privateKey],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/14b7a223c6b344e29dea4d1e33e0929a",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
