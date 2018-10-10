var mongoose = require('mongoose');

 requesSchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:'Reques'
     },
     isSLA: {
        type: Boolean,
        default: false
    },
     isReunion: {
        type: Boolean,
        default: false
    },
     isAttsment: {
        type: Boolean,
        default: false
    }
     
});
module.exports =mongoose.model('reques',requesSchame);