var mongoose = require('mongoose');

techchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:'Technology'
     }
     
     
});
module.exports =mongoose.model('tech',techchame);