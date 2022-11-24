pragma solidity ^0.8.1;

contract MoodDiary{
    
    //creating a variable called mood
    string mood;
    
    //creating a function that writes a mood to the smart contract
    function setMood(string memory _mood) public{
        mood = _mood;
    }
    
    //creating a function that reads the mood from the smart contract
    function getMood() public view returns(string memory){
        return mood;
    }
}
