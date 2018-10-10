var mongoose = require('mongoose');

groupchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:''
     },
     funtion_id:{
         type:Number,
         default:0
     }
    
     
     
});
module.exports =mongoose.model('group',groupchame);