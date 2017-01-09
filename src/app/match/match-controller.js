'use strict';

/* @ngInject */
function MatchController($scope,$stateParams, firebaseFactory, $firebaseArray) {
    $scope.currentPlayer = 'X';

    var ref = firebaseFactory.database().ref().child("matches");
    var matches = $firebaseArray(ref);
    function save() {
        matches.$save($scope.match);
    }
    matches.$loaded()
        .then(function(match) {
            console.log(match);
            $scope.match = match.$getRecord($stateParams.id);
            hasWinner();
        })
        .catch(function(error) {
            console.log("Error:", error);
        });
    $scope.selectSquare = function(id) {
        $scope.match.board[id].squareValue = $scope.match.currentPlayer;
        $scope.match.currentPlayer = $scope.match.currentPlayer ==='X' ? 'O' : 'X';
        hasWinner();
    };
    function hasWinner (){
       return  winner(0,1,2) ||
        winner(3,4,5) ||
        winner(6,7,8) ||
        winner(0,4,8) ||
        winner(2,4,6) ||
        winner(0,3,6) ||
        winner(1,4,7) ||
        winner(2,5,8) ||
        stalemate();
    }

    function winner (tic, tac, toe){
        var gameBoard = $scope.match.board;
        var ticValue = gameBoard[tic].squareValue;
        var tacValue = gameBoard[tac].squareValue;
        var toeValue = gameBoard[toe].squareValue;
        var winCheck = (ticValue == tacValue &&
                        ticValue == toeValue &&
                        ticValue);
        if(winCheck) {
            $scope.match.winner = ticValue;
            $scope.match.status = 'closed';
            save();
        }
        return winCheck;
    }
    function stalemate() {
        var gameBoard = $scope.match.board;
        for (var i=0; i<9; i++) {
            if (gameBoard[i].squareValue == '') return false;
        }
        $scope.match.winner = "Draw";
        return true;
    }

}


module.exports = MatchController;