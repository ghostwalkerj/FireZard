
async function main() {
  // We get the contract to deploy
  // @ts-ignore
  const FZ_Dragon = await ethers.getContractFactory("FZ_Dragon");
  console.log("Deploying FZ_Dragon");
  // @ts-ignore
  const fz_dragon = await upgrades.deployProxy(FZ_Dragon, { initializer: 'FZ_initialize' });
  console.log("FZ_Dragon deployed to:", fz_dragon.address);

  // @ts-ignore
  const FireZard = await ethers.getContractFactory("FireZard");
  console.log("Deploying FireZard");
  const fireZard = await upgrades.deployProxy(FireZard, { initializer: 'FZinitialize' });
  //@ts-ignore
  //const fireZard = await upgrades.deployProxy(FireZard);
  console.log("FireZard deployed to:", fz_dragon.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });