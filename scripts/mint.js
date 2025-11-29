const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0x8D930388bDd25047E70C5B874009D6CC6a54EB04";
  const shinu = await ethers.getContractAt("SHINU", contractAddress);

  const recipient = deployer.address; 
  const amount = ethers.utils.parseUnits("100", 18);

  const tx = await shinu.mint(recipient, amount);
  console.log("Mint tx hash:", tx.hash);
  await tx.wait();
  console.log("Minted", amount.toString(), "to", recipient);
  const remaining = await shinu.remainingMintable();
  console.log("Remaining mintable (wei):", remaining.toString());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
