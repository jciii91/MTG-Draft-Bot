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

//Common Run B
let commonRunB = [
	"Return to Nature", "Shriekdiver", "Snarespinner", "Toll of the Invasion", "Kraul Stinger", "Lazotep Behemoth", "Wardscale Crocodile", "Duskmantle Operative", "Vivien's Grizzly", "Spark Reaper", "Courage in Crisis",
	"Sorin's Thirst", "Forced Landing", "Vampire Opportunist", "Steady Aim", "Aid the Fallen", "Return to Nature", "Charity Extractor", "New Horizons", "Toll of the Invasion", "Primordial Wurm", "Lazotep Behemoth",
	"Kronch Wrangler", "Kaya's Ghostform", "Snarespinner", "Tithebearer Giant", "Wardscale Crocodile", "Spark Reaper", "Forced Landing", "Shriekdiver", "Courage in Crisis", "Sorin's Thirst", "Kraul Stinger",
	"Vampire Opportunist", "Vivien's Grizzly", "Duskmantle Operative", "Snarespinner", "Toll of the Invasion", "Kronch Wrangler", "Aid the Fallen", "Steady Aim", "Charity Extractor", "Primordial Wurm", "Lazotep Behemoth",
	"Return to Nature", "Kaya's Ghostform", "New Horizons", "Tithebearer Giant", "Vivien's Grizzly", "Spark Reaper", "Courage in Crisis", "Shriekdiver", "Wardscale Crocodile", "Duskmantle Operative", "Forced Landing",
	"Sorin's Thirst", "Kraul Stinger", "Vampire Opportunist", "Steady Aim", "Charity Extractor", "Kronch Wrangler", "Tithebearer Giant", "New Horizons", "Aid the Fallen", "Primordial Wurm", "Kaya's Ghostform"
	];

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
	if (packSeed === 1) {
		
		let index = rng(66)-1;
		for (i=0; i<2; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=2; i<4; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 2) {
		
		let index = rng(66)-1;
		for (i=0; i<3; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=3; i<5; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}
		
	} else if (packSeed === 3) {

		let index = rng(66)-1;
		for (i=0; i<4; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=4; i<6; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 4) {

		let index = rng(66)-1;
		for (i=0; i<4; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=4; i<7; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}

	} else if (packSeed === 5) {

		let index = rng(66)-1;
		for (i=0; i<4; i++) {											//Loop to determine commons from run A
			randomPack[i] = commonRunA[index];
			index = (index === commonRunA.length-1) ? 0 : index + 1;
		}
		
		index = rng(66)-1;
		for (i=4; i<8; i++) {											//Loop to determine commons from run B
			randomPack[i] = commonRunB[index];
			index = (index === commonRunB.length-1) ? 0 : index + 1;
		}
	}	
	alert(randomPack[0]);
	alert(randomPack[1]);
	alert(randomPack[2]);
	alert(randomPack[3]);
}
