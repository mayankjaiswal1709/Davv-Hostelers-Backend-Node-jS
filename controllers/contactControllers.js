const Contact = require('../models/Contact');

const filldetails = async (req, res) => {
    try {
        const data = await new Contact(req.body);
        data.save();
        if (data) {
            return res.status(201).json({
                msg: 'Success'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: "try again unsuccessful"
        })
    }
};


const seedetails = async (req, res) => {
    try {
        const data = await Contact.find();
        if (data) { res.json({ msg: 'success', data }) }
    } catch (error) {
        return res.status(500).json({
            msg: "try again !! "
        })
    }
};

module.exports = {
    filldetails,
    seedetails,
}