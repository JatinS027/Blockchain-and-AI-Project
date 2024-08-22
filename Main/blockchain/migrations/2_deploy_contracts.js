/* eslint-disable no-undef */
var SupplyChain = artifacts.require('SupplyChain');

module.exports = function(deployer) {
  deployer.deploy(SupplyChain);
};

const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(MetaCoin);
};
