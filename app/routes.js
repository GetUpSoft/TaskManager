var Task = require('./Controller/main');
var entity = require('./Config/config');
module.exports = function (app) {

    //Añadir validaciones de rutas de usuarios a entidades 
    app.get('/api/entity',function(req,res){
         res.json(entity.public);
    });

    entity.private.forEach(function(model){
        app.get('/api/'+model, function (req, res) {
            // use mongoose to get all todos in the database
            var Task1 = new Task(model,req,res);
             Task1.found(model,req,res);
        })
    });
    // api ---------------------------------------------------------------------
   
    // create todo and send back all todos after creation
    app.post('/api/tasks', function (req, res) {
        var Task1 = new Task('tasks',req, res);
        Task1.createTask(req, res);
    });
    

    // delete a todo
    app.delete('/api/tasks/:todo_id', function (req, res) {
        var Task1 = new Task('tasks',req, res);
        task.deleteTasks(req, res);
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
