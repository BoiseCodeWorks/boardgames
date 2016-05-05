angular.module('boardgames')
    .config(function($stateProvider){
        
        $stateProvider
            .state('home', {
                url: '',
                template: '<h1>Hello view 1</h1><a ui-sref="lights-out">Lights Out</a>'
            })
            .state('lights-out', {
                url: '/lights-out',
                template: '<lights-out-component></lights-out-component>',
            })
        
    })