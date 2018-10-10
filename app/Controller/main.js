var Srv= require('../Services/main');
module.exports = function (models, req, res) {
    var mod = require('../models/' + models);
    var dataj = {};
    this.found = function(models,req,res){
        this.models = models;
        this.req = req;
        this.res = res;
        mod.find(function (err, data) {
          
            if (err) {
                res.send(err);
            }
            
            data.forEach(function(element){
               dataj = element; 
            });
            var Srv1 = new Srv(models,dataj);
            Srv1.detail(models,dataj,res);
            res.json(data); 
            
        });
        
        

    };
}