const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
    {
        setNumber: {
            type: Number,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        multiverseId: {
            type: Number,
            required: true,
            unique: true,
        }
    },
);

const Card = model('Card', cardSchema);

module.exports = Card;