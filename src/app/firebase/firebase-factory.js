'use strict';

var Firebase = require('firebase');

/* @ngInject */
function FirebaseFactory() {
    const config = {
        apiKey: "AIzaSyCo1scurrvS_AKF9RGpoLq7DIqVoTgGHTk",
        authDomain: "tic-tac-to-c8f08.firebaseapp.com",
        databaseURL: "https://tic-tac-to-c8f08.firebaseio.com",
        storageBucket: "tic-tac-to-c8f08.appspot.com",
        messagingSenderId: "656167595779"
    };

    Firebase.initializeApp(config);

    return Firebase;
}

module.exports = FirebaseFactory;