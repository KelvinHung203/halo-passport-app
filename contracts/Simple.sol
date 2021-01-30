// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Simple{

    address public owner = msg.sender;
    string public info ;

    modifier restricted() {
        require(msg.sender==owner,
        "This function is restricted to the Owner"
        );
        _;
    }

    function setInfo(string memory data) public restricted{
        info = data;
    }
}
/**
    Terminal call
    ~ truffle develop 

    -> Console of the truffle <-
    ~ compile 
    ~ migrate 

    --------------->>>>>
    //Run some command inside the truffle console 

    // Get the acccounts 
    // make sure the Num of accounts is the same as Ganache 

    let accounts = await web3.eth.getAccounts()
    accounts


    // get the instance to call the contract 

    let instance = await Simple.deployed()
    instance.setInfo(abs)

    //Now you shoulde see the change in ganache -> new transaction  should be made


 */