var mongoose = require('mongoose');

summarySchame = new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        default: ''
    },
    user_id: {
        type: Number,
        default: 0
    }

});
module.exports = mongoose.model('summary', summarySchame);