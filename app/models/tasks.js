var mongoose = require('mongoose');

tasktschema = new mongoose.Schema({
    
    task_id: {
        type: Number,
        default: 0
    },
    rq_id: {
        type: Number,
        default: 0
    },
    tech_id: {
        type: Number,
        default: 0
    },
    priority_id: {
        type: Number,
        default: 0
    },
    summary_id: {
        type: Number,
        default: 0
    },
    line_id: {
        type: Number,
        default: 0 
    },                               
    comment_id: {
        type: Number,
        default:''
    },    
    hours: {
        type: Number,
        default:0
    },                                 
    date_get: {
        type: Date,
        default:0
    }, 
    date_str: {
        type: Date,
        default:0
    },
    date_end: {
        type: Date,
        default:0
    }, 
    isActive: {
        type: Boolean,
       default: true
   }                               
                                  
                                  

});

module.exports = mongoose.model('tasks', tasktschema);