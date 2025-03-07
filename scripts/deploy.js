const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const ZombieFactory = await hre.ethers.getContractFactory("ZombieFactory");

  // Deploy the contract
  const zombieFactory = await ZombieFactory.deploy();  // Deploys contract
  await zombieFactory.waitForDeployment(); // Wait for deployment to finish

  console.log(`ZombieFactory deployed at: ${await zombieFactory.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
