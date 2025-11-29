const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x8D930388bDd25047E70C5B874009D6CC6a54EB04";
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
