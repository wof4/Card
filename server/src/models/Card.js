const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    id: { type: Types.ObjectId },
    cardNumber: { type: String, required: true },
    expDate: { type: String, required: true },
    cvv: { type: String, required: true },
    amount: { type: String, required: true },
});

module.exports = model('Card', schema)

