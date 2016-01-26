'use strict';


angular.module('confusionApp', [])

    .controller('MenuController', ['$scope', '$http', function($scope, $http) {

      $http.get('json/celebrities.json').then(function(response){

        $scope.images = response.data.records;

        var shuffleArray = function(array) {
          var m = array.length, t, i;

          // While there remain elements to shuffle
          while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
          }

          return array;
        }

        $scope.randomize = function(){
            shuffleArray($scope.images);
        };


      });
      $scope.blur = true;
      $scope.checked = true;

      $scope.toggleBlur = function() {
        $scope.blur = !$scope.blur;
      };

      $scope.forceBlur = function() {
        $scope.blur = true;
      };
  }]);
