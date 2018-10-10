var mongoose = require('mongoose');

 reunionSchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:''
     },
     isSLA: {
        type: Boolean,
        default: false
    }
     
});
module.exports =mongoose.model('reunion',reunionSchame);