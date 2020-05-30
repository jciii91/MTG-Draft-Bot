//Global Variable Declarations
let pack = new Array(); //Current pack seen on screen
let randomPack = new Array();
let userCardPool = new Array();
let sideBoard = new Array();
let botZeroCardPool = new Array();
let botOneCardPool = new Array();
let botTwoCardPool = new Array();
let botThreeCardPool = new Array();
let botFourCardPool = new Array();
let botFiveCardPool = new Array();
let botSixCardPool = new Array();
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
let verticalOffset0 = 0;
let verticalOffset1 = 0;
let verticalOffset2 = 0;
let verticalOffset3 = 0;
let verticalOffset4 = 0;
let verticalOffset5 = 0;
let verticalOffsetOther = 0;
let verticalOffsetSB = 0;
let isDetails = 1;
let isSideboard = 0;
let userPoolCounter = 0;
let mouseStart = 0;
let mouseEnd = 0;
let motionCard = 0;
let fillerObject = {
    name: "filler",
    img: "filler",
	priority: "filler",
    cmc: "filler",
    type: "filler",
    subtype: "filler",
    set: "filler",
    rules: "filler",
    flavor: "filler",
    power: "filler",
    toughness: "filler",
    loyalty: "filler"
}

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
		userHand(x,1);
		botZeroCardPool.push(packTwo[botHand(packTwo,0)]);
		packTwo.splice(botHand(packTwo),1);
		botOneCardPool.push(packThree[botHand(packThree,1)]);
		packThree.splice(botHand(packThree),1);
		botTwoCardPool.push(packFour[botHand(packFour,2)]);
		packFour.splice(botHand(packFour),1);
		botThreeCardPool.push(packFive[botHand(packFive,3)]);
		packFive.splice(botHand(packFive),1);
		botFourCardPool.push(packSix[botHand(packSix,4)]);
		packSix.splice(botHand(packSix),1);
		botFiveCardPool.push(packSeven[botHand(packSeven,5)]);
		packSeven.splice(botHand(packSeven),1);
		botSixCardPool.push(packEight[botHand(packEight,6)]);
		packEight.splice(botHand(packEight),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packOne.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packTwo[i].img, i);
		}
	} else if (pickCounter === 2 || pickCounter === 10) {
		userHand(x,2);
		botZeroCardPool.push(packThree[botHand(packThree,0)]);
		packThree.splice(botHand(packThree),1);
		botOneCardPool.push(packFour[botHand(packFour,1)]);
		packFour.splice(botHand(packFour),1);
		botTwoCardPool.push(packFive[botHand(packFive,2)]);
		packFive.splice(botHand(packFive),1);
		botThreeCardPool.push(packSix[botHand(packSix,3)]);
		packSix.splice(botHand(packSix),1);
		botFourCardPool.push(packSeven[botHand(packSeven,4)]);
		packSeven.splice(botHand(packSeven),1);
		botFiveCardPool.push(packEight[botHand(packEight,5)]);
		packEight.splice(botHand(packEight),1);
		botSixCardPool.push(packOne[botHand(packOne,6)]);
		packOne.splice(botHand(packOne),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packTwo.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packThree[i].img, i);
		}
	} else if (pickCounter === 3 || pickCounter === 11) {
		userHand(x,3);
		botZeroCardPool.push(packFour[botHand(packFour,0)]);
		packFour.splice(botHand(packFour),1);
		botOneCardPool.push(packFive[botHand(packFive,1)]);
		packFive.splice(botHand(packFive),1);
		botTwoCardPool.push(packSix[botHand(packSix,2)]);
		packSix.splice(botHand(packSix),1);
		botThreeCardPool.push(packSeven[botHand(packSeven,3)]);
		packSeven.splice(botHand(packSeven),1);
		botFourCardPool.push(packEight[botHand(packEight,4)]);
		packEight.splice(botHand(packEight),1);
		botFiveCardPool.push(packOne[botHand(packOne,5)]);
		packOne.splice(botHand(packOne),1);
		botSixCardPool.push(packTwo[botHand(packTwo,6)]);
		packTwo.splice(botHand(packTwo),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packThree.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packFour[i].img, i);
		}
	} else if (pickCounter === 4 || pickCounter === 12) {
		userHand(x,4);
		botZeroCardPool.push(packFive[botHand(packFive,0)]);
		packFive.splice(botHand(packFive),1);
		botOneCardPool.push(packSix[botHand(packSix,1)]);
		packSix.splice(botHand(packSix),1);
		botTwoCardPool.push(packSeven[botHand(packSeven,2)]);
		packSeven.splice(botHand(packSeven),1);
		botThreeCardPool.push(packEight[botHand(packEight,3)]);
		packEight.splice(botHand(packEight),1);
		botFourCardPool.push(packOne[botHand(packOne,4)]);
		packOne.splice(botHand(packOne),1);
		botFiveCardPool.push(packTwo[botHand(packTwo,5)]);
		packTwo.splice(botHand(packTwo),1);
		botSixCardPool.push(packThree[botHand(packThree,6)]);
		packThree.splice(botHand(packThree),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packFour.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packFive[i].img, i);
		}
	} else if (pickCounter === 5 || pickCounter === 13) {
		userHand(x,5);
		botZeroCardPool.push(packSix[botHand(packSix,0)]);
		packSix.splice(botHand(packSix),1);
		botOneCardPool.push(packSeven[botHand(packSeven,1)]);
		packSeven.splice(botHand(packSeven),1);
		botTwoCardPool.push(packEight[botHand(packEight,2)]);
		packEight.splice(botHand(packEight),1);
		botThreeCardPool.push(packOne[botHand(packOne,3)]);
		packOne.splice(botHand(packOne),1);
		botFourCardPool.push(packTwo[botHand(packTwo,4)]);
		packTwo.splice(botHand(packTwo),1);
		botFiveCardPool.push(packThree[botHand(packThree,5)]);
		packThree.splice(botHand(packThree),1);
		botSixCardPool.push(packFour[botHand(packFour,6)]);
		packFour.splice(botHand(packFour),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packFive.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packSix[i].img, i);
		}
	} else if (pickCounter === 6) {
		userHand(x,6);
		botZeroCardPool.push(packSeven[botHand(packSeven,0)]);
		packSeven.splice(botHand(packSeven),1);
		botOneCardPool.push(packEight[botHand(packEight,1)]);
		packEight.splice(botHand(packEight),1);
		botTwoCardPool.push(packOne[botHand(packOne,2)]);
		packOne.splice(botHand(packOne),1);
		botThreeCardPool.push(packTwo[botHand(packTwo,3)]);
		packTwo.splice(botHand(packTwo),1);
		botFourCardPool.push(packThree[botHand(packThree,4)]);
		packThree.splice(botHand(packThree),1);
		botFiveCardPool.push(packFour[botHand(packFour,5)]);
		packFour.splice(botHand(packFour),1);
		botSixCardPool.push(packFive[botHand(packFive,6)]);
		packFive.splice(botHand(packFive),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packSix.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packSeven[i].img, i);
		}
	} else if (pickCounter === 7) {
		userHand(x,7);
		botZeroCardPool.push(packEight[botHand(packEight,0)]);
		packEight.splice(botHand(packEight),1);
		botOneCardPool.push(packOne[botHand(packOne,1)]);
		packOne.splice(botHand(packOne),1);
		botTwoCardPool.push(packTwo[botHand(packTwo,2)]);
		packTwo.splice(botHand(packTwo),1);
		botThreeCardPool.push(packThree[botHand(packThree,3)]);
		packThree.splice(botHand(packThree),1);
		botFourCardPool.push(packFour[botHand(packFour,4)]);
		packFour.splice(botHand(packFour),1);
		botFiveCardPool.push(packFive[botHand(packFive,5)]);
		packFive.splice(botHand(packFive),1);
		botSixCardPool.push(packSix[botHand(packSix,6)]);
		packSix.splice(botHand(packSix),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packSeven.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packEight[i].img, i);
		}
	} else if (pickCounter === 8) {
		userHand(x,8);
		botZeroCardPool.push(packOne[botHand(packOne,0)]);
		packOne.splice(botHand(packOne),1);
		botOneCardPool.push(packTwo[botHand(packTwo,1)]);
		packTwo.splice(botHand(packTwo),1);
		botTwoCardPool.push(packThree[botHand(packThree,2)]);
		packThree.splice(botHand(packThree),1);
		botThreeCardPool.push(packFour[botHand(packFour,3)]);
		packFour.splice(botHand(packFour),1);
		botFourCardPool.push(packFive[botHand(packFive,4)]);
		packFive.splice(botHand(packFive),1);
		botFiveCardPool.push(packSix[botHand(packSix,5)]);
		packSix.splice(botHand(packSix),1);
		botSixCardPool.push(packSeven[botHand(packSeven,6)]);
		packSeven.splice(botHand(packSeven),1);
		pickCounter++;
		var element = document.getElementById("currentPack");
		for (i=0; i<=packEight.length; i++) {
			element.removeChild(element.firstChild);
			show_image(packOne[i].img, i);
		}
	} else if (pickCounter === 14) {
		userHand(x,6);
		botZeroCardPool.push(packSeven[botHand(packSeven,0)]);
		packSeven.splice(botHand(packSeven),1);
		botOneCardPool.push(packEight[botHand(packEight,1)]);
		packEight.splice(botHand(packEight),1);
		botTwoCardPool.push(packOne[botHand(packOne,2)]);
		packOne.splice(botHand(packOne),1);
		botThreeCardPool.push(packTwo[botHand(packTwo,3)]);
		packTwo.splice(botHand(packTwo),1);
		botFourCardPool.push(packThree[botHand(packThree,4)]);
		packThree.splice(botHand(packThree),1);
		botFiveCardPool.push(packFour[botHand(packFour,5)]);
		packFour.splice(botHand(packFour),1);
		botSixCardPool.push(packFive[botHand(packFive,6)]);
		packFive.splice(botHand(packFive),1);
		pickCounter = 1;
		roundCounter++;
		var element = document.getElementById("currentPack");
		while (element.hasChildNodes()) {
			element.removeChild(element.firstChild);
		}
		alert("Round over.");
		if (roundCounter === 3) {
			alert("Draft complete.");
			return;
		}
		startDraft();
	}
}

//User Hand
//Selection function takes card out of pack and puts it in the user's pool

function userHand(x,packID) {
	switch (packID) {
		case 1:
			userCardPool.push(packOne[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packOne.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
		case 2:
			userCardPool.push(packTwo[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packTwo.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
		case 3:
			userCardPool.push(packThree[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packThree.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
		case 4:
			userCardPool.push(packFour[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packFour.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
		case 5:
			userCardPool.push(packFive[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packFive.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
		case 6:
			userCardPool.push(packSix[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packSix.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
		case 7:
			userCardPool.push(packSeven[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packSeven.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
		case 8:
			userCardPool.push(packEight[x]);
			userCardPool[userCardPool.length-1].UPID = "card" + userPoolCounter +"CP";
			userPoolCounter++;
			packEight.splice(x,1);
			show_userCardPool(userCardPool[userCardPool.length-1].img,userCardPool[userCardPool.length-1],userCardPool[userCardPool.length-1].UPID);
		break;
	}
	drawColorPie();
}

//Bot Hand
//Selection function used by the bots

function botHand(bp,ID) {
	let botPick = 0;
	let botPrio = 0;
	let tempPrio = 0;
	let devotion = 0;
	for (i=0;i<bp.length;i++) {
		tempPrio = bp[i].priority*(whatCMC(bp[i])-0.025*cANDnc(bp[i],ID)) + 5*(roundCounter/2)*colorCount(bp[i],ID);
		if (tempPrio > botPrio) {
			botPrio = tempPrio;
			botPick = i;
		}
	}
	return botPick;
}

//Color Count
//Gets color ID of card, checks how much of that color shows up in the bot's pile

function colorCount(card,ID) {
	let colorWeight = 0;
	let castingCost = card.cmc.toString();
	let colorArray = [0,0,0,0,0] //[W,U,B,R,G]
	for (j=0;j<castingCost.length;j++) {
		switch (castingCost[j]) {
			case "W":
				colorArray[0] += 1;
				break;
			case "U":
				colorArray[1] += 1;
				break;
			case "B":
				colorArray[2] += 1;
				break;
			case "R":
				colorArray[3] += 1;
				break;
			case "G":
				colorArray[4] += 1;
				break;
		}
	}
	let botArray = [0,0,0,0,0];
	let cCard = 0;
	switch (ID) {
		case 0:
			for (k=0;k<botZeroCardPool.length;k++) {
				cCard = botZeroCardPool[k].cmc;
				for (h=0;h<cCard.length;h++) {
					switch (cCard[h]) {
						case "W":
							botArray[0] += 1;
							break;
						case "U":
							botArray[1] += 1;
							break;
						case "B":
							botArray[2] += 1;
							break;
						case "R":
							botArray[3] += 1;
							break;
						case "G":
							botArray[4] += 1;
							break;
					}
				}
			}
			break;
		case 1:
			for (k=0;k<botOneCardPool.length;k++) {
				cCard = botOneCardPool[k].cmc;
				for (h=0;h<cCard.length;h++) {
					switch (cCard[h]) {
						case "W":
							botArray[0] += 1;
							break;
						case "U":
							botArray[1] += 1;
							break;
						case "B":
							botArray[2] += 1;
							break;
						case "R":
							botArray[3] += 1;
							break;
						case "G":
							botArray[4] += 1;
							break;
					}
				}
			}
			break;
		case 2:
			for (k=0;k<botTwoCardPool.length;k++) {
				cCard = botTwoCardPool[k].cmc;
				for (h=0;h<cCard.length;h++) {
					switch (cCard[h]) {
						case "W":
							botArray[0] += 1;
							break;
						case "U":
							botArray[1] += 1;
							break;
						case "B":
							botArray[2] += 1;
							break;
						case "R":
							botArray[3] += 1;
							break;
						case "G":
							botArray[4] += 1;
							break;
					}
				}
			}
			break;
		case 3:
			for (k=0;k<botThreeCardPool.length;k++) {
				cCard = botThreeCardPool[k].cmc;
				for (h=0;h<cCard.length;h++) {
					switch (cCard[h]) {
						case "W":
							botArray[0] += 1;
							break;
						case "U":
							botArray[1] += 1;
							break;
						case "B":
							botArray[2] += 1;
							break;
						case "R":
							botArray[3] += 1;
							break;
						case "G":
							botArray[4] += 1;
							break;
					}
				}
			}
			break;
		case 4:
			for (k=0;k<botFourCardPool.length;k++) {
				cCard = botFourCardPool[k].cmc;
				for (h=0;h<cCard.length;h++) {
					switch (cCard[h]) {
						case "W":
							botArray[0] += 1;
							break;
						case "U":
							botArray[1] += 1;
							break;
						case "B":
							botArray[2] += 1;
							break;
						case "R":
							botArray[3] += 1;
							break;
						case "G":
							botArray[4] += 1;
							break;
					}
				}
			}
			break;
		case 5:
			for (k=0;k<botFiveCardPool.length;k++) {
				cCard = botFiveCardPool[k].cmc;
				for (h=0;h<cCard.length;h++) {
					switch (cCard[h]) {
						case "W":
							botArray[0] += 1;
							break;
						case "U":
							botArray[1] += 1;
							break;
						case "B":
							botArray[2] += 1;
							break;
						case "R":
							botArray[3] += 1;
							break;
						case "G":
							botArray[4] += 1;
							break;
					}
				}
			}
			break;
		case 6:
			for (k=0;k<botSixCardPool.length;k++) {
				cCard = botSixCardPool[k].cmc;
				for (h=0;h<cCard.length;h++) {
					switch (cCard[h]) {
						case "W":
							botArray[0] += 1;
							break;
						case "U":
							botArray[1] += 1;
							break;
						case "B":
							botArray[2] += 1;
							break;
						case "R":
							botArray[3] += 1;
							break;
						case "G":
							botArray[4] += 1;
							break;
					}
				}
			}
			break;
	}
	for (w=0;w<colorArray.length;w++) {
		if (colorArray[w] > 0) {
			colorWeight += botArray[w];
		}
	}
	return colorWeight;
}

//What CMC
//Gets the CMC of a card, applies a multiplier based on CMC

function whatCMC(card) {
	let cmcString = card.cmc.toString();
	let firstPosition = Number(cmcString[0]);
	if (isNaN(cmcString[0])) {firstPosition = 0;}
	let cmc = firstPosition + (cmcString.length - 1);
	let weight = 1;
	switch (cmc){
		case 0:
			weight = 1;
			if (card.type == "Land") {weight = .85}
			break;
		case 1:
			weight = .90;
			break;
		case 2:
			weight = .95;
			break;
		case 3:
			weight = 1;
			break;
		case 4:
			weight = .95;
			break;
		case 5:
			weight = .90;
			break;
	}
	
	if (cmc >= 6) {weight = .85}
	
	return weight;
}

//Creature and Non Creature Count
//The more of one of these appears in a card pool, the less it is prioritized

function cANDnc(card,ID) {
	let cardType = card.type;
	let typeCounter = [0,0];
	switch (ID) {
		case 0:
			for (k=0;k<botZeroCardPool.length;k++) {
				if (botZeroCardPool[k].type.includes("Creature")) {
					typeCounter[0] += 1;
				} else if (!(botZeroCardPool[k].type.includes("Creature"))) {
					typeCounter[1] += 1;
				}
			}
			break;
		case 1:
			for (k=0;k<botOneCardPool.length;k++) {
				if (botOneCardPool[k].type.includes("Creature")) {
					typeCounter[0] += 1;
				} else if (!(botOneCardPool[k].type.includes("Creature"))) {
					typeCounter[1] += 1;
				}
			}
			break;
		case 2:
			for (k=0;k<botTwoCardPool.length;k++) {
				if (botTwoCardPool[k].type.includes("Creature")) {
					typeCounter[0] += 1;
				} else if (!(botTwoCardPool[k].type.includes("Creature"))) {
					typeCounter[1] += 1;
				}
			}
			break;
		case 3:
			for (k=0;k<botThreeCardPool.length;k++) {
				if (botThreeCardPool[k].type.includes("Creature")) {
					typeCounter[0] += 1;
				} else if (!(botThreeCardPool[k].type.includes("Creature"))) {
					typeCounter[1] += 1;
				}
			}
			break;
		case 4:
			for (k=0;k<botFourCardPool.length;k++) {
				if (botFourCardPool[k].type.includes("Creature")) {
					typeCounter[0] += 1;
				} else if (!(botFourCardPool[k].type.includes("Creature"))) {
					typeCounter[1] += 1;
				}
			}
			break;
		case 5:
			for (k=0;k<botFiveCardPool.length;k++) {
				if (botFiveCardPool[k].type.includes("Creature")) {
					typeCounter[0] += 1;
				} else if (!(botFiveCardPool[k].type.includes("Creature"))) {
					typeCounter[1] += 1;
				}
			}
			break;
		case 6:
			for (k=0;k<botSixCardPool.length;k++) {
				if (botSixCardPool[k].type.includes("Creature")) {
					typeCounter[0] += 1;
				} else if (!(botSixCardPool[k].type.includes("Creature"))) {
					typeCounter[1] += 1;
				}
			}
			break;
	}
	if (cardType.includes("Creature")) {
		return typeCounter[0];
	} else if (!(cardType.includes("Creature"))) {
		return typeCounter[1];
	}
}

//moveToSideboard
//Remove card from the mainboard and add it to the sideboard

function moveToSideboard(cardID) {
	show_sideBoard(cardID);
	var elem = document.getElementById(cardID);
	elem.parentNode.removeChild(elem);
	var pos1 = cardID.indexOf("d");
	var pos2 = cardID.lastIndexOf("M");
	var mbIndex = (pos2 - pos1 === 2) ? cardID[4] : cardID[4] + cardID[5];
	fixVerticalAlignment(userCardPool[mbIndex]);
	sideBoard.push(userCardPool[mbIndex]);
	userCardPool[mbIndex] = fillerObject;
	drawColorPie();
}

//moveToMainboard
//Remove card from the sideboard and add it to the mainboard

function moveToMainboard(cardID) {
	var elem = document.getElementById(cardID);
	elem.parentNode.removeChild(elem);
	var pos1 = cardID.indexOf("d");
	var pos2 = cardID.lastIndexOf("S");
	var sbIndex = (pos2 - pos1 === 2) ? cardID[4] : cardID[4] + cardID[5];
	var oldID = cardID.slice(0,pos2) + "CP";
	show_userCardPool(sideBoard[sbIndex].img,sideBoard[sbIndex],oldID); //Need to fix something here
	fixVerticalAlignmentSB();
}

//fixVerticalAlignment
//Make piles look nice when cards are moved from one board to another

function fixVerticalAlignment(card) {
	let numCMC = "cmc" + getCMC(card);
	var div = document.getElementById(numCMC);
	var nodelist = div.getElementsByTagName("img");
	var offset = 0;
	for (i = 0; i < nodelist.length; i++) {
		nodelist[i].style.top = offset++*35 + "px";
	}
	switch (getCMC(card)) {
		case 0:
			verticalOffset0 = offset;
			break;
		case 1:
			verticalOffset1 = offset;
			break;
		case 2:
			verticalOffset2 = offset;
			break;
		case 3:
			verticalOffset3 = offset;
			break;
		case 4:
			verticalOffset4 = offset;
			break;
		case 5:
			verticalOffset5 = offset;
			break;
		default:
			verticalOffsetOther = offset;
	}
}

//fixVerticalAlignmentSB
//Make piles look nice when cards are moved from one board to another

function fixVerticalAlignmentSB() {
	var div = document.getElementById("sideboardColumn");
	var nodelist = div.getElementsByTagName("img");
	var offset = 0;
	for (i = 0; i < nodelist.length; i++) {
		nodelist[i].style.top = offset++*35 + "px";
	}
	verticalOffsetSB = offset;
}

//showSideboard
//Display cards in the sideboard, enable moving them to the mainboard

function showSideboard(ISB) {
	if (ISB) { 
		return; 
	}
	document.getElementById("sideboardColumn").style.display = "block";
	document.getElementById("poolDetails").style.display = "none";
	isSideboard = 1;
	isDetails = 0;
}

//showDetails
//Display details of the mainboard

function showDetails(ID) {
	if (ID) { 
		console.log(isDetails);
		return; 
	}
	document.getElementById("poolDetails").style.display = "block";
	document.getElementById("sideboardColumn").style.display = "none";
	isDetails = 1;
	isSideboard = 0;
}

//drawColorPie
//Call drawWedge five times, draw a wedge for each color proportional to its appearence in the user's pool
function drawColorPie() {
	let colorArray = [0,0,0,0,0];
	let theCard = 0;
	for (k=0;k<userCardPool.length;k++) {
		theCard = userCardPool[k].cmc;
		for (h=0;h<theCard.length;h++) {
			switch (theCard[h]) {
				case "W":
					colorArray[0] += 1;
					break;
				case "U":
					colorArray[1] += 1;
					break;
				case "B":
					colorArray[2] += 1;
					break;
				case "R":
					colorArray[3] += 1;
					break;
				case "G":
					colorArray[4] += 1;
					break;
			}
		}
	}
	let colorTotal = colorArray[0] + colorArray[1] + colorArray[2] + colorArray[3] + colorArray[4];
	let endW = 2*(colorArray[0]/colorTotal);
	let endU = endW + 2*(colorArray[1]/colorTotal);
	let endB = endU + 2*(colorArray[2]/colorTotal);
	let endR = endB + 2*(colorArray[3]/colorTotal);
	let endG = endR + 2*(colorArray[4]/colorTotal);
	var canvas=document.getElementById("poolDetails");
	var ctx=canvas.getContext("2d");
	// clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawWedge(0,endW,"white");
	drawWedge(endW,endU,"blue");
	drawWedge(endU,endB,"black");
	drawWedge(endB,endR,"red");
	drawWedge(endR,endG,"green");
	drawTypeStats("Creature",250);
	drawTypeStats("Instant",265);
	drawTypeStats("Sorcery",280);
	drawTypeStats("Enchantment",295);
	drawTypeStats("Artifact",310);
	drawTypeStats("Planeswalker",325);
	drawTypeStats("Land",340);
	return;
}

//drawWedge
//Draws the wedges for pie charts

function drawWedge(start,end,fillColor) {
	// canvas references
	var canvas=document.getElementById("poolDetails");
	var ctx=canvas.getContext("2d");
	// the centerpoint of the wedge
	var cx=175;
	var cy=125;
	// radius
	var radius=100;
	// the beginning and ending angles 
	var beginningAngle = start*Math.PI;
	var endingAngle = end*Math.PI;
	// set the path style
	ctx.strokeStyle="#000000";
	ctx.fillStyle=fillColor;
	ctx.lineWidth=2;
	// begin the path
	ctx.beginPath();
	// top-arc: sweeping from top-left to top-right
	ctx.arc(cx,cy,radius,beginningAngle,endingAngle);
	// right-line: from the end of top-arc to the center
	ctx.lineTo(cx,cy);
	// left-line: from the end of the top-arc to the center
	ctx.closePath();
	// fill & stroke the path
	ctx.fill();
	ctx.stroke();
}

//drawTypeStats
//Add up card types and display the amounts

function drawTypeStats(theType,lineBreak) {
	let typeCounter = 0;
	for (k=0;k<userCardPool.length;k++) {
		cardType = userCardPool[k].type;
		if (cardType.includes(theType)) {
			typeCounter++;
		}
	}
	drawText(theType,typeCounter,lineBreak);
}

//drawText
//Draws the stats that are written out

function drawText(type,amount,lineBreak) {
	// canvas references
	var canvas=document.getElementById("poolDetails");
	var ctx=canvas.getContext("2d");
	// origin of the text
	var cx=75;
	var cy=lineBreak;
	ctx.font = "15px Arial";
	var lineOfText = type+": "+amount;
	ctx.lineWidth=1;
	ctx.fillStyle="black";
	ctx.fillText(lineOfText, cx, cy);
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

//Show User Card Pool
//Same as image display function but no onclick is added

function show_userCardPool(src,card,imgID) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 204;
    img.height = 288;
	img.className = "cards";
	var pos2 = imgID.indexOf("C");
	img.id = imgID.slice(0,pos2) + "MB";
    let numCMC = "cmc" + getCMC(card);
	img.setAttribute("ondblclick", "moveToSideboard(this.id)");
    img.setAttribute("onmouseenter", "showCard(this)");
	img.setAttribute("onmouseleave", "hideCard(this)");
	
	switch (getCMC(card)) {
		case 0:
			verticalOffset = 35*verticalOffset0;
			verticalOffset0++;
			break;
		case 1:
			verticalOffset = 35*verticalOffset1;
			verticalOffset1++;
			break;
		case 2:
			verticalOffset = 35*verticalOffset2;
			verticalOffset2++;
			break;
		case 3:
			verticalOffset = 35*verticalOffset3;
			verticalOffset3++;
			break;
		case 4:
			verticalOffset = 35*verticalOffset4;
			verticalOffset4++;
			break;
		case 5:
			verticalOffset = 35*verticalOffset5;
			verticalOffset5++;
			break;
		default:
			verticalOffset = 35*verticalOffsetOther;
			verticalOffsetOther++;
			numCMC = "cmc" + 6;
	}
	
	img.style.top = verticalOffset + "px";
	
    document.getElementById(numCMC).appendChild(img);
}

//showSideboard
//Same as display function but ondblclick moves card back to mainbaord

function show_sideBoard(cardID) {
	let x = parseFloat(cardID[4]+cardID[5]);
	var img = document.createElement("img");
	img.src = userCardPool[x].img;
    img.width = 204;
    img.height = 288;
	var pos2 = cardID.indexOf("M");
	img.id = cardID.slice(0,pos2) + "SB";
	userCardPool[x].UPID = img.id;
	img.className = "cards";
	img.setAttribute("ondblclick", "moveToMainboard(this.id)");
    img.setAttribute("onmouseenter", "showCard(this)");
	img.setAttribute("onmouseleave", "hideCard(this)");
	verticalOffset = 35*verticalOffsetSB;
	verticalOffsetSB++;
	img.style.top = verticalOffset + "px";
	document.getElementById("sideboardColumn").appendChild(img);
}

//showCard
//Brings hovered card to front, lets user look through stached piles

function showCard(x) {
  x.style.zIndex = "100";
}

//hideCard
//Brings hovered card to front, lets user look through stached piles

function hideCard(x) {
  x.style.zIndex = "0";
}

//getCMC
//Find cmc of card

function getCMC(card) {
	let cmcString = card.cmc.toString();
	let firstPosition = Number(cmcString[0]);
	if (isNaN(cmcString[0]) && (cmcString[0] != "X")) {firstPosition = 1;}
	if (isNaN(cmcString[0]) && (cmcString[0] == "X")) {firstPosition = 0;}
	let cmc = firstPosition + (cmcString.length - 1);	
	
	return cmc;
}

//Show Bot Card Pool
//Same as image display function but no onclick is added

function show_botCardPool(src) {
    var img = document.createElement("img");
    img.src = src;
    img.width = 255;
    img.height = 360;

    // This next line will just add it to the <body> tag
    document.getElementById("currentPack").appendChild(img);
}

//Change Pile
//Function for buttons, clears the screen and shows the selected pile of cards

function changePile(x) {
	var element = document.getElementById("currentPack");
	switch (x) {
		case 100:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<userCardPool.length;i++) {
				show_userCardPool(userCardPool[i].img);
			}
			break;
		case 0:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<botZeroCardPool.length;i++) {
				show_botCardPool(botZeroCardPool[i].img);
			}
			break;
		case 1:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<botOneCardPool.length;i++) {
				show_botCardPool(botOneCardPool[i].img);
			}
			break;
		case 2:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<botTwoCardPool.length;i++) {
				show_botCardPool(botTwoCardPool[i].img);
			}
			break;
		case 3:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<botThreeCardPool.length;i++) {
				show_botCardPool(botThreeCardPool[i].img);
			}
			break;
		case 4:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<botFourCardPool.length;i++) {
				show_botCardPool(botFourCardPool[i].img);
			}
			break;
		case 5:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<botFiveCardPool.length;i++) {
				show_botCardPool(botFiveCardPool[i].img);
			}
			break;
		case 6:
			while (element.hasChildNodes()) {
				element.removeChild(element.firstChild);
			}
			for (i=0;i<botSixCardPool.length;i++) {
				show_botCardPool(botSixCardPool[i].img);
			}
			break;
	}
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
	for (i=0; i<packOne.length; i++) {
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

}
