// Code goes here
(function() {
  var app = angular.module("PluralSight");
  var UserController = function($scope, $http, github, $location, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getrepo($scope.user.repos_url)
        .then(OnRepos, OnError);
    };

    var OnRepos = function(data) {

      $scope.repos = data;

    };

    var OnError = function(reason) {
      $scope.error = "Data Does Not Exist";
    };

    //below funcationality handled in html with <a href>
    //$scope.repo_name_click = function(repo) {
    //  var path = "/repo/" + $scope.username + "/" + repo.name;
     // $location.path(path);
   // };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getuser($scope.username).then(onUserComplete, OnError);

  };

  app.controller("UserController", UserController);
}());