//Image display

function show_image(src, num) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 255;
    img.height = 360;
    img.id = "card" + num;
	img.className = "packCard";
    img.setAttribute("onclick", "pickCard(id)");

    // This next line will just add it to the <body> tag
    document.getElementById("currentPack").appendChild(img);
}

//Random number generator
function rng(max) {
  // here rand is from 1 to (max+1)
  let rand = 1 + Math.random() * (max);
  return Math.floor(rand);
}

function makePack() {													//Function to generate a pack. Typically called 8 times in a single session.

	randomPack = new Array();
	let packSeed = rng(5);												//Call rng() to decide on the pack's seed, there are 5 possible types of pack.
																		//Each seed uses 3 'for' loops, one for each type of common in the pack.
	
	uncommonDeterminant();												//Call uncommonDeterminant() to fill in first 4 cards, the 3 uncommons and the rare/mythic.
	
	if (packSeed === 1) {
		
		let index = rng(66)-1;
		for (i=4; i<6; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=6; i<8; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}
		
		index = rng(55)-1;
		for (i=8; i<14; i++) {											//Loop to determine commons from run C1
			randomPack[i] = commonRunC1[index];
			index = (index === commonRunC1.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 2) {
		
		let index = rng(66)-1;
		for (i=4; i<7; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=7; i<9; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}
		
		index = rng(55)-1;
		for (i=9; i<14; i++) {											//Loop to determine commons from run C1
			randomPack[i] = commonRunC1[index];
			index = (index === commonRunC1.length-1) ? 0 : index + 1;
		}
		
	} else if (packSeed === 3) {

		let index = rng(66)-1;
		for (i=4; i<8; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=8; i<10; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}
		
		index = rng(55)-1;
		for (i=10; i<14; i++) {											//Loop to determine commons from run C2
			randomPack[i] = commonRunC2[index];
			index = (index === commonRunC2.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 4) {

		let index = rng(66)-1;
		for (i=4; i<8; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=8; i<11; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}
		
		index = rng(55)-1;
		for (i=11; i<14; i++) {											//Loop to determine commons from run C2
			randomPack[i] = commonRunC2[index];
			index = (index === commonRunC2.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 5) {

		let index = rng(66)-1;
		for (i=4; i<8; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=8; i<12; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}
		
		index = rng(55)-1;
		for (i=12; i<14; i++) {											//Loop to determine commons from run C2
			randomPack[i] = commonRunC2[index];
			index = (index === commonRunC2.length-1) ? 0 : index + 1;
		}
	}
	return randomPack;
}

//Card names in the arrays are replaced with objects made from the set list
function fillPlayerPacks(cardPool) {
	for (i=0;i<8;i++) {
		for (j=0;j<3;j++) {
			for (k=0;k<14;k++) {
				cardPool[i][j][k] = findCard(cardPool[i][j][k])
			}
		}
	}
}

//function to search for card based on name
function findCard(cardName) {
	for (l=0;l<setWAR.length;l++)  {
		if (setWAR[l].name == cardName) {
			return setWAR[l];
		}
	}
	console.log("No match for " + cardName)
	return cardName;
}

/*function ScryfallRequest(playerPool) {
	let cardPool0 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player0"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player0"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player0"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player0"][2][13]
		}
	]
	}

	let cardPool1 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player1"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player1"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player1"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player1"][2][13]
		}
	]
	}
	
	let cardPool2 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player2"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player2"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player2"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player2"][2][13]
		}
	]
	}
	
	let cardPool3 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player3"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player3"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player3"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player3"][2][13]
		}
	]
	}
	
	let cardPool4 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player4"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player4"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player4"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player4"][2][13]
		}
	]
	}

	let cardPool5 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player5"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player5"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player5"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player5"][2][13]
		}
	]
	}
	
	let cardPool6 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player6"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player6"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player6"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player6"][2][13]
		}
	]
	}
	
	let cardPool7 = {
		"identifiers": [
			{
			"set": "war",
			"name": playerPool["player7"][0][0]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][1]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][2]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][3]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][4]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][5]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][6]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][7]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][8]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][9]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][10]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][11]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][12]
		},
			{
			"set": "war",
			"name": playerPool["player7"][0][13]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][0]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][1]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][2]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][3]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][4]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][5]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][6]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][7]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][8]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][9]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][10]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][11]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][12]
		},
			{
			"set": "war",
			"name": playerPool["player7"][1][13]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][0]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][1]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][2]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][3]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][4]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][5]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][6]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][7]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][8]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][9]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][10]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][11]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][12]
		},
			{
			"set": "war",
			"name": playerPool["player7"][2][13]
		}
	]
	}
	
	const promise1 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool0),
		headers: {"Content-type": "application/json; charset=UTF-8"}
		
	})
	.then(response => response.json());
	
	const promise2 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool1),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	})
	.then(response => response.json());
	
	const promise3 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool2),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	})
	.then(response => response.json());
	
	const promise4 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool3),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	})
	.then(response => response.json());
	
	const promise5 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool4),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	})
	.then(response => response.json());
	
	const promise6 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool5),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	})
	.then(response => response.json());
	
	const promise7 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool6),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	})
	.then(response => response.json());
	
	const promise8 = fetch('https://api.scryfall.com/cards/collection', {
		method: 'POST',
		body: JSON.stringify(cardPool7),
		headers: {"Content-type": "application/json; charset=UTF-8"}
	})
	.then(response => response.json());
	
	Promise.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then((values) => {
		for (i=0; i<14; i++) {
		show_image(values[0].data[i].image_uris.normal,i);
		}
		console.log(values);
	});
}*/

/*[0].data[0].name*/

//Uncommon and Rare/Mythic Determinant
//Decides if a pack will have an Uncommon Planeswalker, 2 As and a B, or 2 Bs and an A
//If an Uncommon planeswalker appears, ensures the rare/mythic is not a Planeswalker

function uncommonDeterminant() {
	let numDet1 = rng(100);									//Uncommon, mythic and Planeswalker selection is first governed by a 25% chance and a 50% chance.
	let numDet2 = rng(100);									//There is a 25% chance of the pack having a rare/mythic Planeswalker, and 4 combinations of uncommons possible.
															//A rare/mythic PW has 2 different combinations of uncommons possible, and the same is true if there is an uncommon PW.	There cannot be an uncommon and rare/mythic PW in the same pack.
	if ((numDet1 <= 75) && (numDet2 > 50)){
		randomPack[0] = rareTest(numDet1);
		randomPack[1] = uncommonRunA[rng(54)-1];
		randomPack[2] = uncommonRunB[rng(66)-1];
		randomPack[3] = uncommonRunPW[rng(20)-1];
	} else if ((numDet1 <= 75) && (numDet2 <= 50)){
		randomPack[0] = rareTest(numDet1);
		let B = rng(66)-1;
		randomPack[1] = uncommonRunB[B];
		randomPack[2] = uncommonRunB[(B == 65 ? 0 : B+1)];
		randomPack[3] = uncommonRunPW[rng(20)-1];
	} else if ((numDet1 > 75) && (numDet2 > 50)){
		randomPack[0] = rareTest(numDet1);
		let A = rng(54)-1;
		randomPack[1] = uncommonRunA[A];
		randomPack[2] = uncommonRunA[(A == 53 ? 0 : A+1)];
		randomPack[3] = uncommonRunB[rng(66)-1];
	} else if ((numDet1 > 75) && (numDet2 <= 50)){
		randomPack[0] = rareTest(numDet1);
		let B = rng(66)-1;
		randomPack[1] = uncommonRunA[rng(53)-1];
		randomPack[2] = uncommonRunB[B];
		randomPack[3] = uncommonRunB[(B == 65 ? 0 : B+1)];
	}
}

//Rare/Mythic Planeswalker Test Function
//Checks if there will be an Uncommon Planeswalker, ensures that there will not be 2 PWs in a pack
//If x<=75, pull a random Rare or Mythic from the non-PW array; ELSE, pull a random Rare or Mythic from the PW array.

function rareTest(x) {
	let rare = 0;
	let check = true;
	if (x <= 75) {
		rare = rares[(rng(rares.length)-1)];

	} else if (x > 75) {
		rare = raresPW[(rng(raresPW.length)-1)];
	}
	return rare;
}