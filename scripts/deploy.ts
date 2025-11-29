import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const initialSupply = ethers.parseUnits("0", 18); // Ethers v6에서는 parseUnits로 변경

  const SHINU = await ethers.getContractFactory("SHINU");
  const contract = await SHINU.deploy(initialSupply);

  await contract.waitForDeployment();

  console.log("SHINU deployed to:", await contract.getAddress());
  console.log("Initial supply (wei):", initialSupply.toString());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
