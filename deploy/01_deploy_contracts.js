
const { ethers, upgrades } = require("hardhat");

function tokens(n) {
    return ethers.utils.parseEther(n);
}

module.exports = async ({
    deployments,
    getNamedAccounts
}) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy("BEP20TokenWhitelisted", {
        from: deployer,
        gasLimit: 9500000,
        args: []
    });

    let token = await ethers.getContract("BEP20TokenWhitelisted");

    // console.log("BEP20 Address: ", token.address);
}