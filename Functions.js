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

//Pack generator

function makePack() {
	let packNum = rng(5);

	if (packNum === 1) {

		let A1 = rng(66); //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 1 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let B1 = rng(66); //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 1 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

	} else if (packNum === 2) {
		
		let A1 = rng(66); //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 1 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 1 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let B1 = rng(66); //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 1 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

	} else if (packNum === 3) {

		let A1 = rng(66); //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 1 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 1 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let A4 = (A3 === 65) ? 1 : A3 + 1;
		show_image(commonRunA[A4].img, 265, 370);

		let B1 = rng(66); //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 1 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

	} else if (packNum === 4) {

		let A1 = rng(66); //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 1 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 1 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let A4 = (A3 === 65) ? 1 : A3 + 1;
		show_image(commonRunA[A4].img, 265, 370);

		let B1 = rng(66); //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 1 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

		let B3 = (B2 === 65) ? 1 : B2 + 1;
		show_image(commonRunB[B3].img, 265, 370);

	} else if (packNum === 5) {

		let A1 = rng(66); //Determines the first card selected
		show_image(commonRunA[A1].img, 265, 370);

		let A2 = (A1 === 65) ? 1 : A1 + 1;
		show_image(commonRunA[A2].img, 265, 370);

		let A3 = (A2 === 65) ? 1 : A2 + 1;
		show_image(commonRunA[A3].img, 265, 370);

		let A4 = (A3 === 65) ? 1 : A3 + 1;
		show_image(commonRunA[A4].img, 265, 370);

		let B1 = rng(66); //Determines the first card selected
		show_image(commonRunB[B1].img, 265, 370);

		let B2 = (B1 === 65) ? 1 : B1 + 1;
		show_image(commonRunB[B2].img, 265, 370);

		let B3 = (B2 === 65) ? 1 : B2 + 1;
		show_image(commonRunB[B3].img, 265, 370);

		let B4 = (B3 === 65) ? 1 : B3 + 1;
		show_image(commonRunB[B4].img, 265, 370);

	}

}