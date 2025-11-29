const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0xFe7F0F9aFB7A9673a2C444D81Bb06837c66E8797";
  const shinu = await ethers.getContractAt("SHINU", contractAddress);

  // example: mint 100 SHINU to some address
  const recipient = deployer.address; // 예시: deployer 자신
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
