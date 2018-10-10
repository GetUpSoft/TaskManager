angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Tasks', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/tasks');
			},
			create : function(todoData) {
                return $http.post('/api/tasks', todoData);
			},
			delete : function(id) {
                return $http.delete('/api/tasks/' + id);
			},
			entity : function () {
				return $http.get('/api/entity');
			}
		}
	}]);