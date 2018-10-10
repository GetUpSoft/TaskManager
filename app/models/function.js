var mongoose = require('mongoose');

functionchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:''
     }
     
     
});
module.exports =mongoose.model('function',functionchame);