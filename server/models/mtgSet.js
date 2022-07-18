const { Schema, model } = require('mongoose');

const setSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        code: {
            type: String,
            required: true,
            unique: true,
        }
    },
);

const mtgSet = model('mtgSet', setSchema);

module.exports = mtgSet;