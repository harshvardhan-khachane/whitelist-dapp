const hre = require("hardhat");

const contractAddress = "0xBC223296594b59E320C18e9e3a523f7fB77d5F43";

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main(){
    const nftContract = await
    hre.ethers.deployContract("CryptoDevs", [contractAddress]);

    await nftContract.waitForDeployment();

    console.log("NFT Contact Address:", nftContract.target);

    await sleep(30*1000);

    await hre.run("verify:verify", {
        address: nftContract.target,
        constructorArguments: [contractAddress],
    })
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });



// const hre = require("hardhat");

// async function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function main() {
//   /*
//     DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
//     so whitelistContract here is a factory for instances of our Whitelist contract.
//     */
//   // here we deploy the contract
//   const whitelistContract = await hre.ethers.deployContract("Whitelist", [10]);
//   // 10 is the Maximum number of whitelisted addresses allowed

//   // wait for the contract to deploy
//   await whitelistContract.waitForDeployment();

//   // print the address of the deployed contract
//   console.log("Whitelist Contract Address:", whitelistContract.target);

//   // Sleep for 30 seconds while Etherscan indexes the new contract deployment
//   await sleep(30 * 1000); // 30s = 30 * 1000 milliseconds

//   // Verify the contract on etherscan
//   await hre.run("verify:verify", {
//     address: whitelistContract.target,
//     constructorArguments: [10],
//   });
// }

// // Call the main function and catch if there is any error
// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });