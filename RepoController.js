// Code goes here
(function() {
  var app = angular.module("PluralSight");
  var RepoController = function($scope, github, $routeParams) {

    var GetRepoDetails = function(data) {

      $scope.repodetails = data;

    }
    var GetContributors = function(data) {

      $scope.contributordetails = data;

    }

    var OnError = function(reason) {
      $scope.error = "Data Does Not Exist";
    };

    repo_url = "https://api.github.com/repos/" + $routeParams.username + "/" + $routeParams.reponame;
    var repo = github.getrepo(repo_url)
      .then(GetRepoDetails, OnError)
    contributors_url = "https://api.github.com/repos/" + $routeParams.username + "/" + $routeParams.reponame+"/contributors";
    var contributors = github.getrepo(contributors_url)
      .then(GetContributors, OnError);


  };
  app.controller("RepoController", RepoController);
}());