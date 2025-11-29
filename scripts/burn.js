const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0x8D930388bDd25047E70C5B874009D6CC6a54EB04";
  const shinu = await ethers.getContractAt("SHINU", contractAddress);

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
