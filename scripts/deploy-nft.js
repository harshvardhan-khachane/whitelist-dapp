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