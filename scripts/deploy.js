const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const initialSupply = ethers.utils.parseUnits("0", 18);

  const SHINU = await ethers.getContractFactory("SHINU");
  const contract = await SHINU.deploy(initialSupply);

  await contract.deployed();

  console.log("SHINU deployed to:", contract.address);
  console.log("Initial supply (wei):", initialSupply.toString());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
