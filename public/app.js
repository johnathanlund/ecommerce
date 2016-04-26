angular.module('eCommerce', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {



      $stateProvider
        .state("products", {
          url: "/productsPage",
          templateUrl: "./templates/productstmpl.html"
        })
        .state("admin", {
          url:  "/adminPage",
          templateUrl: "./templates/admintmpl.html"
        });
          $urlRouterProvider.otherwise('/productsPage');
});
