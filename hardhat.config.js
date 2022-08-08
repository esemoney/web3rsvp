/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

require("@nomicfoundation/hardhat-chai-matchers");

require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.STAGING_ALCHEMY_URL,
      accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};

// module.exports = {
//   solidity: "0.8.4",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//     mumbai: {
//       url: process.env.STAGING_INFURA_URL,
//       accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
//       gas: 2100000,
//       gasPrice: 8000000000,
//     },
//   },
// };
