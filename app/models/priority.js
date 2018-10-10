var mongoose = require('mongoose');

 prioritySchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:'Priority'
     },
     pos: {
        type: Number,
        default: 0
    }
     
});
module.exports =mongoose.model('priority',prioritySchame);