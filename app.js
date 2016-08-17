(function() {

  var app = angular.module("PluralSight", ["ngRoute"]);

  app.config(function($routeProvider) {

    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "repo.html",
        controller: "RepoController"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      .otherwise({
        redirectTo: "/main"
      });
  });


}());