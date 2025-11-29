const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0xFe7F0F9aFB7A9673a2C444D81Bb06837c66E8797";
  const shinu = await ethers.getContractAt("SHINU", contractAddress);

  // burn 10 tokens from deployer
  const amount = ethers.utils.parseUnits("10", 18);
  const tx = await shinu.burn(deployer.address, amount);
  console.log("Burn tx hash:", tx.hash);
  await tx.wait();
  console.log("Burned", amount.toString(), "from", deployer.address);
  const remaining = await shinu.remainingMintable();
  console.log("Remaining mintable (wei):", remaining.toString());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
