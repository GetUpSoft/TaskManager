var mongoose = require('mongoose');

 timeSchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:''
     },
     time_str: {
        type: Date,
        default: 0
    },
      time_end: {
        type: Date,
        default: 0
    },
     day:{
         type: Number,
         default:0
     },
     hours:{
     type: Number,
      efault:0
 },
     avg:{
     type: Number,
      efault:0
 }
     
});
module.exports =mongoose.model('time',timeSchame);