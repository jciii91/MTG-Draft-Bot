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

//Card names in the arrays are replaced with objects made from the set list
function fillPlayerPacks(cardPool) {
	for (i=0;i<8;i++) {
		for (j=0;j<3;j++) {
			for (k=0;k<14;k++) {
				cardPool[i][j][k] = findCard(cardPool[i][j][k]);
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