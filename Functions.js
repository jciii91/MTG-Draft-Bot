//Global Variable Declarations
let pack = new Array();

//Random number generator

function rng(max) {
  // here rand is from 1 to (max+1)
  let rand = 1 + Math.random() * (max);
  return Math.floor(rand);
}

//Card selector

function pickCard(cardID) {
	let x = parseFloat(cardID[4]+cardID[5]);
	alert(pack[x].name);
}

//Image display

function show_image(src, num) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 265;
    img.height = 370;
    img.id = "card" + num;
    img.onclick = pickCard(id);

    // This next line will just add it to the <body> tag
    document.getElementById("currentPack").appendChild(img);
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
		pack[0] = rareTest(numDet1);
		pack[1] = uncommonRunA[rng(54)-1];
		pack[2] = uncommonRunB[rng(66)-1];
		pack[3] = uncommonRunPW[rng(20)-1];
	} else if ((numDet1 <= 75) && (numDet2 <= 50)){
		pack[0] = rareTest(numDet1);
		let B = rng(66)-1;
		pack[1] = uncommonRunB[B];
		pack[2] = uncommonRunB[(B == 65 ? 0 : B+1)];
		pack[3] = uncommonRunPW[rng(20)-1];
	} else if ((numDet1 > 75) && (numDet2 > 50)){
		pack[0] = rareTest(numDet1);
		let A = rng(54)-1;
		pack[1] = uncommonRunA[A];
		pack[2] = uncommonRunA[(A == 53 ? 0 : A+1)];
		pack[3] = uncommonRunB[rng(66)-1];
	} else if ((numDet1 > 75) && (numDet2 <= 50)){
		pack[0] = rareTest(numDet1);
		let B = rng(66)-1;
		pack[1] = uncommonRunA[rng(53)-1];
		pack[2] = uncommonRunB[B];
		pack[3] = uncommonRunB[(B == 65 ? 0 : B+1)];
	}
}

//Pack generator

function makePack() {
	uncommonDeterminant();
	
	let packNum = rng(5);

	if (packNum === 1) {

		let A1 = rng(66)-1; //Determines the first card selected
		pack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		pack[5] = commonRunA[A2];

		let B1 = rng(66)-1; //Determines the first card selected
		pack[6] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		pack[7] = commonRunB[B2];

		let C1 = rng(55)-1; //Determines the first card selected
		pack[8] = commonRunC1[C1].img;

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		pack[9] = commonRunC1[C2].img;

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		pack[10] = commonRunC1[C3].img;

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		pack[11] = commonRunC1[C4].img;

		let C5 = (C4 === 54) ? 0 : C4 + 1;
		pack[12] = commonRunC1[C5].img;

		let C6 = (C5 === 54) ? 0 : C5 + 1;
		pack[13] = commonRunC1[C6].img;

	} else if (packNum === 2) {
		
		let A1 = rng(66)-1; //Determines the first card selected
		pack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		pack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		pack[6] = commonRunA[A3];

		let B1 = rng(66)-1; //Determines the first card selected
		pack[7] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		pack[8] = commonRunB[B2];

		let C1 = rng(55)-1; //Determines the first card selected
		pack[9] = commonRunC1[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		pack[10] = commonRunC1[C2];

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		pack[11] = commonRunC1[C3];

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		pack[12] = commonRunC1[C4];

		let C5 = (C4 === 54) ? 0 : C4 + 1;
		pack[13] = commonRunC1[C5];

	} else if (packNum === 3) {

		let A1 = rng(66)-1; //Determines the first card selected
		pack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		pack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		pack[6] = commonRunA[A3];

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		pack[7] = commonRunA[A4];

		let B1 = rng(66)-1; //Determines the first card selected
		pack[8] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		pack[9] = commonRunB[B2];

		let C1 = rng(55)-1; //Determines the first card selected
		pack[10] = commonRunC2[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		pack[11] = commonRunC2[C2];

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		pack[12] = commonRunC2[C3];

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		pack[13] = commonRunC2[C4];

	} else if (packNum === 4) {

		let A1 = rng(66)-1; //Determines the first card selected
		pack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		pack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		pack[6] = commonRunA[A3];

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		pack[7] = commonRunA[A4];

		let B1 = rng(66)-1; //Determines the first card selected
		pack[8] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		pack[9] = commonRunB[B2];

		let B3 = (B2 === 65) ? 0 : B2 + 1;
		pack[10] = commonRunB[B3];

		let C1 = rng(55)-1; //Determines the first card selected
		pack[11] = commonRunC2[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		pack[12] = commonRunC2[C2];

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		pack[13] = commonRunC2[C3];

	} else if (packNum === 5) {

		let A1 = rng(66); //Determines the first card selected
		pack[4] = commonRunA[A1];

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		pack[5] = commonRunA[A2];

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		pack[6] = commonRunA[A3];

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		pack[7] = commonRunA[A4];

		let B1 = rng(66)-1; //Determines the first card selected
		pack[8] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		pack[9] = commonRunB[B2];

		let B3 = (B2 === 65) ? 0 : B2 + 1;
		pack[10] = commonRunB[B3];

		let B4 = (B3 === 65) ? 0 : B3 + 1;
		pack[11] = commonRunB[B4];

		let C1 = rng(55)-1; //Determines the first card selected
		pack[12] = commonRunC2[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		pack[13] = commonRunC2[C2];

	}

}
