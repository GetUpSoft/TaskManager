var mongoose = require('mongoose');

usertaskSchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:''
     },
     rol_id:{
         type:Number,
         default: 0
     },
    contact:{
         type:Number,
         default: 0
     },
    grupo_id:{
         type: Number,
         default:0
     }
     
     
     
});
module.exports =mongoose.model('usertask',usertaskSchame);