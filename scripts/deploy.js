const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const CONTRACT_NAME = process.env.CONTRACT_NAME;
  const CONTRACT_SYMBOL = process.env.CONTRACT_SYMBOL;
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(CONTRACT_NAME, CONTRACT_SYMBOL);
  await nft.deployed();
  let msg = CONTRACT_NAME + ' (' + CONTRACT_SYMBOL + ') deployed to: ';
  console.log(msg, nft.address);
}

//recommended pattern to use async/await everywhere and handle errors properly

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});