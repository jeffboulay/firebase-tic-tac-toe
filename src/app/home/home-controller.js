'use strict';

/* @ngInject */
function HomeController($scope, $state, firebaseFactory, $firebaseArray) {
    var ref = firebaseFactory.database().ref().child("matches");
    $scope.matches = $firebaseArray(ref);
    $scope.startMatch = function() {
        var newMatch = {
            status: 'open',
            winner: '',
            currentPlayer: 'X',
            board: [
                {squareValue: ''},
                {squareValue: ''},
                {squareValue: ''},
                {squareValue: ''},
                {squareValue: ''},
                {squareValue: ''},
                {squareValue: ''},
                {squareValue: ''},
                {squareValue: ''}
            ]
        };
        $scope.matches.$add(newMatch).then(function(ref) {
            $state.go('match',{id:ref.key});
        });
    };
}

module.exports = HomeController;