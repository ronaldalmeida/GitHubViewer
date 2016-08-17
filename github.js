(function(){
  
  var github = function($http){
    
    var getuser = function(username){
      
      return $http.get("https://api.github.com/users/" + username)
                  .then(function(response){return response.data;});
    };
    var getrepo = function(repo_url){
      return $http.get(repo_url)
                  .then(function(response){return response.data;});
      
    };
    
     return{
    getuser:getuser,
    getrepo:getrepo
  };
    
  };
  

  var module = angular.module("PluralSight");
  module.factory("github",github);
  
}());