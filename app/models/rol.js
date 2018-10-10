var mongoose = require('mongoose');

rolchame= new mongoose.Schema({
    id: {
        type: Number,
        default: 0
    },
     name:{
         type:String,
         default:'Rol User'
     },
    grupo_id:{
         type: Number,
         default:0
     }
     
     
});
module.exports =mongoose.model('rol',rolchame);