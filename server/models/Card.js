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
        },
        rank: {
            type: Number,
            required: true,
        },
        cmc: {
            type: Number,
            required: true,
        },
        manaCost: {
            type: String,
            required: true,
        },
        colors: {
            type: Array,
            required: true
        },
        types: {
            type: Array,
            required: true,
        },
    },
);

const Card = model('Card', cardSchema);

module.exports = Card;