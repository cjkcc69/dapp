const Web3 = require('web3');
const ganache = require('ganache-core');
web3 = new Web3(ganache.provider());

var balance = web3.eth.getBalance(web3.eth.accounts[1]);
var value = web3.fromWei(balance, 'ether');
console.log('balance : ' + value);

web3.personal.unlockAccount(web3.eth.accounts[0], "1", function(err, res){
	if (err)
		throw err; });
		
var txHash = web3.eth.sendTransaction({
				from:web3.eth.coinbase,
				to:web3.eth.accounts[1],
				value:web3.toWei(1,"ether")},
				function(err, res){
					if (err)
						return err;
					else
						console.log('txHash : ' + res);
						return res;}); 