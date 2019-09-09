//Global Variable Declarations
let pack = new Array(); //Current pack seen on screen
let randomPack = new Array();
let userCardPool = new Array();
let packPool = new Array(); //Holds the 8 packs, index rotates through for initial pack construction and passing during draft
let pickCounter = 1; //Tracks which pack needs to be displayed
let packOne = new Array();
let packTwo = new Array();
let packThree = new Array();
let packFour = new Array();
let packFive = new Array();
let packSix = new Array();
let packSeven = new Array();
let packEight = new Array();
let roundCounter = 0;

//Random number generator

function rng(max) {
  // here rand is from 1 to (max+1)
  let rand = 1 + Math.random() * (max);
  return Math.floor(rand);
}

//Card selector

function pickCard(cardID) {
	let x = parseFloat(cardID[4]+cardID[5]);
	if (pickCounter === 1 || pickCounter === 9) {
		userCardPool.push(packOne[x]);
		packOne.splice(x,1);
		packTwo.splice(botHand(packTwo),1);
		packThree.splice(botHand(packThree),1);
		packFour.splice(botHand(packFour),1);
		packFive.splice(botHand(packFive),1);
		packSix.splice(botHand(packSix),1);
		packSeven.splice(botHand(packSeven),1);
		packEight.splice(botHand(packEight),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packOne.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packTwo[i].img, i);
		}
	} else if (pickCounter === 2 || pickCounter === 10) {
		userCardPool.push(packTwo[x]);
		packTwo.splice(x,1);
		packThree.splice(botHand(packThree),1);
		packFour.splice(botHand(packFour),1);
		packFive.splice(botHand(packFive),1);
		packSix.splice(botHand(packSix),1);
		packSeven.splice(botHand(packSeven),1);
		packEight.splice(botHand(packEight),1);
		packOne.splice(botHand(packOne),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packTwo.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packThree[i].img, i);
		}
	} else if (pickCounter === 3 || pickCounter === 11) {
		userCardPool.push(packThree[x]);
		packThree.splice(x,1);
		packFour.splice(botHand(packFour),1);
		packFive.splice(botHand(packFive),1);
		packSix.splice(botHand(packSix),1);
		packSeven.splice(botHand(packSeven),1);
		packEight.splice(botHand(packEight),1);
		packOne.splice(botHand(packOne),1);
		packTwo.splice(botHand(packTwo),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packThree.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packFour[i].img, i);
		}
	} else if (pickCounter === 4 || pickCounter === 12) {
		userCardPool.push(packFour[x]);
		packFour.splice(x,1);
		packFive.splice(botHand(packFive),1);
		packSix.splice(botHand(packSix),1);
		packSeven.splice(botHand(packSeven),1);
		packEight.splice(botHand(packEight),1);
		packOne.splice(botHand(packOne),1);
		packTwo.splice(botHand(packTwo),1);
		packThree.splice(botHand(packThree),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packFour.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packFive[i].img, i);
		}
	} else if (pickCounter === 5 || pickCounter === 13) {
		userCardPool.push(packFive[x]);
		packFive.splice(x,1);
		packSix.splice(botHand(packSix),1);
		packSeven.splice(botHand(packSeven),1);
		packEight.splice(botHand(packEight),1);
		packOne.splice(botHand(packOne),1);
		packTwo.splice(botHand(packTwo),1);
		packThree.splice(botHand(packThree),1);
		packFour.splice(botHand(packFour),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packFive.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packSix[i].img, i);
		}
	} else if (pickCounter === 6) {
		userCardPool.push(packSix[x]);
		packSix.splice(x,1);
		packSeven.splice(botHand(packSeven),1);
		packEight.splice(botHand(packEight),1);
		packOne.splice(botHand(packOne),1);
		packTwo.splice(botHand(packTwo),1);
		packThree.splice(botHand(packThree),1);
		packFour.splice(botHand(packFour),1);
		packFive.splice(botHand(packFive),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packSix.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packSeven[i].img, i);
		}
	} else if (pickCounter === 7) {
		userCardPool.push(packSeven[x]);
		packSeven.splice(x,1);
		packEight.splice(botHand(packEight),1);
		packOne.splice(botHand(packOne),1);
		packTwo.splice(botHand(packTwo),1);
		packThree.splice(botHand(packThree),1);
		packFour.splice(botHand(packFour),1);
		packFive.splice(botHand(packFive),1);
		packSix.splice(botHand(packSix),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packSeven.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packEight[i].img, i);
		}
	} else if (pickCounter === 8) {
		userCardPool.push(packEight[x]);
		packEight.splice(x,1);
		packOne.splice(botHand(packOne),1);
		packTwo.splice(botHand(packTwo),1);
		packThree.splice(botHand(packThree),1);
		packFour.splice(botHand(packFour),1);
		packFive.splice(botHand(packFive),1);
		packSix.splice(botHand(packSix),1);
		packSeven.splice(botHand(packSeven),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packEight.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packOne[i].img, i);
		}
	} else if (pickCounter === 14) {
		userCardPool.push(packSix[x]);
		packSix.splice(x,1);
		packSeven.splice(botHand(packSeven),1);
		packEight.splice(botHand(packEight),1);
		packOne.splice(botHand(packOne),1);
		packTwo.splice(botHand(packTwo),1);
		packThree.splice(botHand(packThree),1);
		packFour.splice(botHand(packFour),1);
		packFive.splice(botHand(packFive),1);
		pickCounter = 1;
		roundCounter++;
		var element = document.getElementById("currentPack");
		var card = document.getElementById(cardID);
		for (i=0; i<=packSix.length; i++) {
			element.removeChild(element.firstChild);
		}
		alert("Round over.");
		if (roundCounter === 3) {
			for (i=0;i<userCardPool.length;i++) {
				show_userCardPool(userCardPool[i].img);
			}
			alert("Draft complete.");
			return;
		}
		startDraft();
	}
}

//Bot Hand
//Selection function used by the bots

function botHand (bp) {
	let botPick = 0;
	return botPick;
}

//Image display

function show_image(src, num) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 265;
    img.height = 370;
    img.id = "card" + num;
    img.setAttribute("onclick", "pickCard(id)");

    // This next line will just add it to the <body> tag
    document.getElementById("currentPack").appendChild(img);
}

//Show User Card Pool
//Same as image display function but no onclick is added

function show_userCardPool(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 265;
    img.height = 370;

    // This next line will just add it to the <body> tag
    document.getElementById("currentPack").appendChild(img);
}

//Start Draft
//Create 8 packs, display first pack

function startDraft() {
	makePack();
	packOne = randomPack;
	makePack();
	packTwo = randomPack;
	makePack();
	packThree = randomPack;
	makePack();
	packFour = randomPack;
	makePack();
	packFive = randomPack;
	makePack();
	packSix = randomPack;
	makePack();
	packSeven = randomPack;
	makePack();
	packEight = randomPack;
	for (i=0; i<=packOne.length; i++) {
		show_image(packOne[i].img,i);
	}
	pack = packOne;
}

//Rare/Mythic Planeswalker Test Function
//Checks if there will be an Uncommon Planeswalker, ensures that there will not be 2 PWs in a pack

function rareTest(x) {
	let rare = 0;
	let check = true;
	if (x <= 75) {
		while (check) {
			rare = rareRun[(rng(121)-1)];
			check = rare.type.includes("Planeswalker");
		}
	} else if (x > 75) {
		while (check) {
			rare = rareRun[(rng(121)-1)];
			check = !(rare.type.includes("Planeswalker"));
		}
	}
	return rare;
}

//Uncommon and Rare/Mythic Determinant
//Decides if a pack will have an Uncommon Planeswalker, 2 As and a B, or 2 Bs and an A
//If an Uncommon planeswalker appears, ensures the rare/mythic is not a Planeswalker

function uncommonDeterminant() {
	let numDet1 = rng(100);
	let numDet2 = rng(100);
	
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

//Pack generator

function makePack() {
	randomPack = new Array();
	uncommonDeterminant();
	
	let packNum = rng(5);

	if (packNum === 1) {

		let A1 = rng(66)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let B1 = rng(66)-1; //Determines the first card selected
		randomPack[6] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		randomPack[7] = commonRunB[B2];

		let C1 = rng(55)-1; //Determines the first card selected
		randomPack[8] = commonRunC1[C1].img;

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		randomPack[9] = commonRunC1[C2].img;

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		randomPack[10] = commonRunC1[C3].img;

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		randomPack[11] = commonRunC1[C4].img;

		let C5 = (C4 === 54) ? 0 : C4 + 1;
		randomPack[12] = commonRunC1[C5].img;

		let C6 = (C5 === 54) ? 0 : C5 + 1;
		randomPack[13] = commonRunC1[C6].img;

	} else if (packNum === 2) {
		
		let A1 = rng(66)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		randomPack[6] = commonRunA[A3];

		let B1 = rng(66)-1; //Determines the first card selected
		randomPack[7] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		randomPack[8] = commonRunB[B2];

		let C1 = rng(55)-1; //Determines the first card selected
		randomPack[9] = commonRunC1[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		randomPack[10] = commonRunC1[C2];

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		randomPack[11] = commonRunC1[C3];

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		randomPack[12] = commonRunC1[C4];

		let C5 = (C4 === 54) ? 0 : C4 + 1;
		randomPack[13] = commonRunC1[C5];

	} else if (packNum === 3) {

		let A1 = rng(66)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		randomPack[6] = commonRunA[A3];

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		randomPack[7] = commonRunA[A4];

		let B1 = rng(66)-1; //Determines the first card selected
		randomPack[8] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		randomPack[9] = commonRunB[B2];

		let C1 = rng(55)-1; //Determines the first card selected
		randomPack[10] = commonRunC2[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		randomPack[11] = commonRunC2[C2];

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		randomPack[12] = commonRunC2[C3];

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		randomPack[13] = commonRunC2[C4];

	} else if (packNum === 4) {

		let A1 = rng(66)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		randomPack[6] = commonRunA[A3];

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		randomPack[7] = commonRunA[A4];

		let B1 = rng(66)-1; //Determines the first card selected
		randomPack[8] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		randomPack[9] = commonRunB[B2];

		let B3 = (B2 === 65) ? 0 : B2 + 1;
		randomPack[10] = commonRunB[B3];

		let C1 = rng(55)-1; //Determines the first card selected
		randomPack[11] = commonRunC2[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		randomPack[12] = commonRunC2[C2];

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		randomPack[13] = commonRunC2[C3];

	} else if (packNum === 5) {

		let A1 = rng(66); //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		randomPack[6] = commonRunA[A3];

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		randomPack[7] = commonRunA[A4];

		let B1 = rng(66)-1; //Determines the first card selected
		randomPack[8] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		randomPack[9] = commonRunB[B2];

		let B3 = (B2 === 65) ? 0 : B2 + 1;
		randomPack[10] = commonRunB[B3];

		let B4 = (B3 === 65) ? 0 : B3 + 1;
		randomPack[11] = commonRunB[B4];

		let C1 = rng(55)-1; //Determines the first card selected
		randomPack[12] = commonRunC2[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		randomPack[13] = commonRunC2[C2];

	}

}
