'use strict';

require('./match.scss');

module.exports = angular.module('boilerplate-app.match',[])
    .controller('matchController', require('./match-controller'))
    .config(require('./match-states'));
