const MoodContractAddress = "0x65B1174cDBb463e0F9132c09aaEDc63b02986D7D";
  const MoodContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
  let MoodContract;
  let signer;
  provider.listAccount().then(function(accounts) {
    signer = provider.getsigner(accounts[0]);
    MoodContract = new ethers.Contract(
        MoodContractAddress, MoodContractABI, signer
    );
  });

  async function getMood(){
      getMoodPromise = MoodContract.getMood();
      var Mood= await getMoodPromise;
      console.log(Mood);
  }

  async function setMood(){
      let mood= getElementbyid("mood").value;
      setMoodPromise = MoodContract.setMood(mood);
      await setMoodPromise;
  }
