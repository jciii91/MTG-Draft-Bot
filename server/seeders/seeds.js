const faker = require('faker');

const db = require('../config/connection');
const { Card } = require('../models');

db.once('open', async () => {
  await Card.deleteMany({});

  // create card data
  const cardData = [];

  for (let i = 0; i < 50; i += 1) {
    const setNumber = faker.random.number();
    const name = faker.name.title();

    cardData.push({ setNumber, name });
  }

  Card.collection.insertMany(cardData);

  console.log('all done!');
  process.exit(0);
});
