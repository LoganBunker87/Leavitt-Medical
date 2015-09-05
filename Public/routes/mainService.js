app.service('mainService', function($http, $q) {
  this.saveData = function(patient) { ///////dont know what to put here
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: '/api/Cancer',
      data: patient
    }).then(function(response) {
      // var parsedResponse = response.data.data //////will need some help here
      deferred.resolve(response)
    })
    return deferred.promise;
  }

  this.test = "hollaaaaa";

  this.getUsers = function(){
    return $http.get("/api/Cancer");
  }



  this.getUser = function(id){
    return $http.get("/api/Cancer?_id=" + id);
  }
});
