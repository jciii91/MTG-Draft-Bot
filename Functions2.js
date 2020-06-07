//Common Run A
let commonRunA = [
	"Kasmina's Transmutation", "Goblin Assault Team", "Ironclad Krovod",
	"Spellkeeper Weird", "Ahn-Crop Invader", "War Screecher",
	"Ashiok's Skulker", "Invading Manticore", "Bulwark Giant",
	"Kiora's Dambreaker", "Raging Kronch", "Gideon's Sacrifice",
	"Teferi's Time Twist", "Grim Initiate", "Martyr for the Cause",
	"Contentious Plan", "Blindblast", "Battlefield Promotion",
	"Crush Dissent", "Chainwhip Cyclops", "Teyo's Lightshield",
	"No Escape", "Turret Ogre", "Ironclad Krovod",
	"Ashiok's Skulker", "Honor the God-Pharaoh", "Rising Populace",
	"Stealth Mission", "Goblin Assault Team", "Pouncing Lynx",
	"Sky Theater Strix", "Goblin Assailant", "Makeshift Battalion",
	"Kasmina's Transmutation", "Samut's Sprint", "War Screecher",
	"Teferi's Time Twist", "Ahn-Crop Invader", "Bulwark Giant",
	"Crush Dissent", "Invading Manticore", "Gideon's Sacrifice",
	"Naga Eternal", "Raging Kronch", "Battlefield Promotion",
	"Sky Theater Strix", "Blindblast", "Loxodon Sergeant",
	"Kiora's Dambreaker", "Chainwhip Cyclops", "Teyo's Lightshield",
	"Spellkeeper Weird", "Turret Ogre", "Pouncing Lynx",
	"Stealth Mission", "Honor the God-Pharaoh", "Rising Populace",
	"No Escape", "Grim Initiate", "Makeshift Battalion",
	"Contentious Plan", "Samut's Sprint", "Martyr for the Cause",
	"Naga Eternal", "Goblin Assailant", "Loxodon Sergeant"
	];

//Random number generator

function rng(max) {
  // here rand is from 1 to (max+1)
  let rand = 1 + Math.random() * (max);
  return Math.floor(rand);
}

function makePack() {
	
	randomPack = new Array();
	let packSeed = rng(5);
	
	if (packSeed === 1) {
		
		let index = rng(66)-1;
		for (i=0; i<2; i++) {
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 2) {
		
		let index = rng(66)-1;
		for (i=0; i<3; i++) {
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
	} else if (packSeed === 3) {

		let index = rng(66)-1;
		for (i=0; i<4; i++) {
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 4) {

		let index = rng(66)-1;
		for (i=0; i<4; i++) {
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 5) {

		let index = rng(66)-1;
		for (i=0; i<4; i++) {
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
	}	
	alert(randomPack[1]);
}

/* Old Pack generator

function makePack() {
	randomPack = new Array();
	uncommonDeterminant();
	
	let packNum = rng(5);

	if (packNum === 1) {

		let A1 = rng(67)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 66) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let B1 = rng(66)-1; //Determines the first card selected
		randomPack[6] = commonRunB[B1];

		let B2 = (B1 === 65) ? 0 : B1 + 1;
		randomPack[7] = commonRunB[B2];

		let C1 = rng(55)-1; //Determines the first card selected
		randomPack[8] = commonRunC1[C1];

		let C2 = (C1 === 54) ? 0 : C1 + 1;
		randomPack[9] = commonRunC1[C2];

		let C3 = (C2 === 54) ? 0 : C2 + 1;
		randomPack[10] = commonRunC1[C3];

		let C4 = (C3 === 54) ? 0 : C3 + 1;
		randomPack[11] = commonRunC1[C4];

		let C5 = (C4 === 54) ? 0 : C4 + 1;
		randomPack[12] = commonRunC1[C5];

		let C6 = (C5 === 54) ? 0 : C5 + 1;
		randomPack[13] = commonRunC1[C6];

	} else if (packNum === 2) {
		
		let A1 = rng(67)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 66) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 66) ? 0 : A2 + 1;
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

		let A1 = rng(67)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 66) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 66) ? 0 : A2 + 1;
		randomPack[6] = commonRunA[A3];

		let A4 = (A3 === 66) ? 0 : A3 + 1;
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

		let A1 = rng(67)-1; //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 66) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 66) ? 0 : A2 + 1;
		randomPack[6] = commonRunA[A3];

		let A4 = (A3 === 66) ? 0 : A3 + 1;
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

		let A1 = rng(67); //Determines the first card selected
		randomPack[4] = commonRunA[A1];

		let A2 = (A1 === 66) ? 0 : A1 + 1;
		randomPack[5] = commonRunA[A2];

		let A3 = (A2 === 66) ? 0 : A2 + 1;
		randomPack[6] = commonRunA[A3];

		let A4 = (A3 === 66) ? 0 : A3 + 1;
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

}*/