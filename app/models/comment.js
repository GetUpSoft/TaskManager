var mongoose = require('mongoose');

commentSchame = new mongoose.Schema({
    id: {
        type: Number,
        default: 1
    },
    name: {
        type: String,
        default: 'comenent'
    },
    user_id: {
        type: Number,
        default: 1
    }

});
module.exports = mongoose.model('comment', commentSchame);