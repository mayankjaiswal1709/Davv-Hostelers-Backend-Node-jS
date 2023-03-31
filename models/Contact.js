const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
});
contactSchema.set('timestamps', true)
module.exports = mongoose.model('Contact', contactSchema);