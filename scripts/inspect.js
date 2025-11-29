const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xFe7F0F9aFB7A9673a2C444D81Bb06837c66E8797";
  const shinu = await ethers.getContractAt("SHINU", contractAddress);

  const totalSupply = await shinu.totalSupply();
  const remaining = await shinu.remainingMintable();
  console.log("Total supply (wei):", totalSupply.toString());
  console.log("Remaining mintable (wei):", remaining.toString());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
