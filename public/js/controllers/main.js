angular.module('todoController', [])

	// inject the Todo service factory into our controller
    .controller('mainController', ['$scope', '$http', 'Tasks', function ($scope, $http, Tasks) {
        vm = this;
		vm.froms = {};
        vm.i = 0;
		
        

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Tasks.get().then(function(data) {
            vm.loading = true;
				vm.tasks = data.data;
				vm.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		vm.addtasks = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if (vm.froms.task_id !== undefined) {
				vm.loading = true;

				// call the create function from our service (returns a promise object)
				Tasks.create(vm.froms )

					// if successful creation, call our get function to get all the new todos
                    .then(function(data) {
						vm.loading = false;
                        vm.froms = {}; // clear the form so our user is ready to enter another
                        vm.tasks = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		vm.deleteTodo = function(id) {
			vm.loading = true;

			Tasks.delete(id)
				// if successful creation, call our get function to get all the new todos
				.then(function(data) {
					vm.loading = false;
					vm.todos = data; // assign our new list of todos
				});
		};
	}]);