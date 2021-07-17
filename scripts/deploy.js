
async function main() {
  // We get the contract to deploy
  const FZ_Dragon = await ethers.getContractFactory("FZ_Dragon");
  console.log("Deploying FZ_Dragon");
  const fz_dragon = await upgrades.deployProxy(FZ_Dragon, { initializer: 'FZ_initialize' });
  console.log("FZ_Dragon deployed to:", fz_dragon.address);

  const FireZard = await ethers.getContractFactory("FireZard");
  console.log("Deploying FireZard");
  const fireZard = await upgrades.deployProxy(FireZard, { initializer: 'FZinitialize' });
  console.log("FireZard deployed to:", fz_dragon.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });