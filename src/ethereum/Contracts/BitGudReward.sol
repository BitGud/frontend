// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract BitGudReward {
    address public organiser;
    uint public balance;
    uint public rewardAmount;
    
    mapping(address => uint) public requesters;
    uint public numOfRequesters;
    
    constructor (uint _rewardAmount) payable {
        organiser = msg.sender;
        rewardAmount = _rewardAmount;
        balance = msg.value;
    }
    
    function addBalance() public payable valueMoreThanZero {
        balance += msg.value;
    }
    
    function sendRewards(address payable _receiver) public onlyOwner isEnoughBalance {
        // Increase number of time user requests rewards
        requesters[_receiver] += 1;
        balance -= rewardAmount;
        numOfRequesters += 1;
        _receiver.transfer(rewardAmount);
    }
    
    modifier onlyOwner {
        require(
            msg.sender == organiser,
            "Only owner can call this function."
        );
        _;
    }
    
    modifier isEnoughBalance {
       require(
            balance >= rewardAmount,
            "Balance is not enough."
        );
        _;
    }
    
    modifier valueMoreThanZero {
       require(
            msg.value > 0,
            "No value added."
        );
        _;
    }
}