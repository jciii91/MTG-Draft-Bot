//Random number generator

function rng(max) {
  // here rand is from 1 to (max+1)
  let rand = 1 + Math.random() * (max);
  return Math.floor(rand);
}

//Image display

function show_image(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
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
	show_image(rare.img, 265, 370);
}

//Uncommon and Rare/Mythic Determinant
//Decides if a pack will have an Uncommon Planeswalker, 2 As and a B, or 2 Bs and an A
//If an Uncommon planeswalker appears, ensures the rare/mythic is not a Planeswalker

function uncommonDeterminant() {
	let numDet1 = rng(100);
	let numDet2 = rng(100);
	
	if ((numDet1 <= 75) && (numDet2 > 50)){
		rareTest(numDet);
		show_image(uncommonRunA[rng(54)-1].img, 265, 370);
		show_image(uncommonRunB[rng(66)-1].img, 265, 370);
		show_image(uncommonRunPW[rng(20)-1].img, 265, 370);
	} else if ((numDet1 <= 75) && (numDet2 <= 50)){
		rareTest(numDet);
		let B = rng(66)-1;
		show_image(uncommonRunB[B].img, 265, 370);
		show_image(uncommonRunB[(B == 65 ? 0 : B+1)].img, 265, 370);
		show_image(uncommonRunPW[rng(20)-1].img, 265, 370);
	} else if ((numDet1 > 75) && (numDet2 > 50)){
		rareTest(numDet);
		let A = rng(54)-1;
		show_image(uncommonRunA[A].img, 265, 370);
		show_image(uncommonRunA[(A == 53 ? 0 : A+1)].img, 265, 370);
		show_image(uncommonRunB[rng(66)-1].img, 265, 370);
	} else if ((numDet1 > 75) && (numDet2 <= 50)){
		rareTest(numDet);
		let B = rng(66)-1;
		show_image(uncommonRunA[rng(53)-1].img, 265, 370);
		show_image(uncommonRunB[B].img, 265, 370);
		show_image(uncommonRunB[(B == 65 ? 0 : B+1)].img, 265, 370);
	}
}

//Pack generator

function makePack() {
	
	uncommonDeterminant();
	
	let packNum = rng(5);

	if (packNum === 1) {

		let A1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let B1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

		let C1 = rng(55)-1; //Determines the first card selected
		show_image(commonRunC1[C1].img, 265, 370);

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		show_image(commonRunC1[C2].img, 265, 370);

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		show_image(commonRunC1[C3].img, 265, 370);

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		show_image(commonRunC1[C4].img, 265, 370);

		let C5 = (C4 === 54) ? 0 : C4 + 1;
		show_image(commonRunC1[C5].img, 265, 370);

		let C6 = (C5 === 54) ? 0 : C5 + 1;
		show_image(commonRunC1[C6].img, 265, 370);

	} else if (packNum === 2) {
		
		let A1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let B1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

		let C1 = rng(55)-1; //Determines the first card selected
		show_image(commonRunC1[C1].img, 265, 370);

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		show_image(commonRunC1[C2].img, 265, 370);

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		show_image(commonRunC1[C3].img, 265, 370);

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		show_image(commonRunC1[C4].img, 265, 370);

		let C5 = (C4 === 54) ? 0 : C4 + 1;
		show_image(commonRunC1[C5].img, 265, 370);

	} else if (packNum === 3) {

		let A1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		show_image(commonRunA[A4].img, 265, 370);

		let B1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

		let C1 = rng(55)-1; //Determines the first card selected
		show_image(commonRunC2[C1].img, 265, 370);

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		show_image(commonRunC2[C2].img, 265, 370);

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		show_image(commonRunC2[C3].img, 265, 370);

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		show_image(commonRunC2[C4].img, 265, 370);

	} else if (packNum === 4) {

		let A1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		show_image(commonRunA[A4].img, 265, 370);

		let B1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

		let B3 = (B2 === 65) ? 0 : B2 + 1;
		show_image(commonRunB[B3].img, 265, 370);

		let C1 = rng(55)-1; //Determines the first card selected
		show_image(commonRunC2[C1].img, 265, 370);

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		show_image(commonRunC2[C2].img, 265, 370);

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		show_image(commonRunC2[C3].img, 265, 370);

	} else if (packNum === 5) {

		let A1 = rng(66); //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 0 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 0 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let A4 = (A3 === 65) ? 0 : A3 + 1;
		show_image(commonRunA[A4].img, 265, 370);

		let B1 = rng(66)-1; //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

		let B3 = (B2 === 65) ? 0 : B2 + 1;
		show_image(commonRunB[B3].img, 265, 370);

		let B4 = (B3 === 65) ? 0 : B3 + 1;
		show_image(commonRunB[B4].img, 265, 370);

		let C1 = rng(55)-1; //Determines the first card selected
		show_image(commonRunC2[C1].img, 265, 370);

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		show_image(commonRunC2[C2].img, 265, 370);

	}

}
