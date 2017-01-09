'use strict';
/* @ngInject */
var MatchStates = function ($stateProvider) {
    var states = [{
        url: '/match/:id',
        name: 'match',
        controller: 'matchController',
        template: require('./match.html'),
        data: {
            pageTitle: 'match'
        }
    }];

    states.forEach(function (state) {
        $stateProvider.state(state);
    });

};
module.exports = MatchStates;
