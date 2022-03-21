const Card = require('../models/Card');


module.exports = async (req, res) => {
    try {
        const { cardNumber, expDate, cvv, amount } = req.body;

        const newCard = new Card({ cardNumber, expDate, cvv, amount })
        await newCard.save()

        const responseData = { requestId: newCard._id, amount: newCard.amount }

        res.status(201).json({ status: 201, message: "Данные карты успешно сохранены", responseData })
    } catch (e) {
        return res.status(400).json({ status: 400, message: "Ошибка при сохранении данных карты" })
    }
};
