//SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

import './RWD.sol';
import './Tether.sol';

contract DecentralBank {
    string public name = 'Decentral Bank';
    address public owner;
    Tether public tether;
    RWD public rwd;

    address[] public stakers;

    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;


    constructor(RWD _rwd, Tether _tether) public{
        rwd = _rwd;
        tether = _tether;
        owner = msg.sender;
    }

    function depositTokens(uint _amount) public {
        require(_amount > 0, "amount cannot be zero");
        tether.transferFrom(msg.sender, address(this), _amount);
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;    
        if(! hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }    
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    function unstakeTokens() public {
        uint balance = stakingBalance[msg.sender];
        require(balance > 0, "staking balance cannot be zero");
        tether.transfer(msg.sender, balance);
        stakingBalance[msg.sender] = 0;
        isStaking[msg.sender] = false;
    }

    function issueTokens() public {
        require(msg.sender == owner, "the caller must be owner");
        for (uint i=0; i<stakers.length; i++) {
            address recepient = stakers[i];
            uint balance = stakingBalance[recepient] / 9;
            if(balance > 0) {
                rwd.transfer(recepient, balance);
            }
        }
    }
}