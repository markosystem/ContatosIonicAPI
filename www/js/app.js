// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.factories'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('API', 'http://bico.vaneves.com/api/')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio.html',
        controller: 'InicioCtrl'
      }
    }
  })

   .state('app.contatos', {
    url: '/contatos',
    views: {
      'menuContent': {
        templateUrl: 'templates/contatos.html',
        controller: 'PessoasCtrl'
      }
    }
  })

   .state('app.cadastrar', {
    url: '/cadastrar',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadastrar.html',
        controller: 'CadastrarCtrl'
      }
    }
  })

   .state('app.interesses', {
    url: '/interesses',
    views: {
      'menuContent': {
        templateUrl: 'templates/interesses.html',
        controller: 'InteressesCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});