const db = require('../config/connection');
const { Card } = require('../models');

const json = require('./WAR.json');
const WAR = json.data.cards;

db.once('open', async () => {
  await Card.deleteMany({});

  let seedArray = [];
  WAR.forEach(card => {
    if (card.number.indexOf('★') != -1 || card.number.indexOf('-') != -1 || card.type.includes('Basic Land')) {
      return;
    }
    let setNumber = card.number;

    let tempCard = {
      "setNumber" : setNumber,
      "name" : card.name
    }
    seedArray.push(tempCard);
  })

  await Card.create(seedArray);

  console.log('all done!');
  process.exit(0);
});
