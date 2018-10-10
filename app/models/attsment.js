var mongoose = require('mongoose');

 attsmentSchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:'File Name'
     },
     file: {
        type: ArrayBuffer,
        default: false
     }
     
});
module.exports =mongoose.model('attsment',attsmentSchame);