var entity = require('../Config/config');
var mods = entity.private;
module.exports = function (model,dataj,res) {
    this.model =model;
    this.dataj = dataj;   
    this.res = res;   
    this.detail = function (model,dataj) {
            
        var result = [];
        mods.forEach(function found(value){
            if(value !== undefined) {
                var coll = require('../models/'+value);
                var arr ={};
                var array ={};
                var A = 0;
                 arr = Object.keys(dataj).map(i => dataj[i]);
                 Object.values(arr).map(function (value) {
                    A = A +1;
                    if ((typeof(value) == "object") && (A==4 )){
                        array = value;
                    }
                 });
                arr = Object.keys(array).map(i => array[i]);
                  arr.forEach(function(value){
                    if (typeof(value)== "number"){
                       coll .find({id:value},function(err,data){
                           if (data !== undefined){
                             resutl = data ;
                            };
                        });
                    } ;
                 });                                   
            };
        }); 
       // return result;
    };
}


