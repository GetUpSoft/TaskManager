var mongoose = require('mongoose');

 lineSchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:''
     },
     pos: {
        type: Number,
        default: 0
    }
     
});
module.exports =mongoose.model('line',lineSchame);