'use strict';

angular.module('confusionApp', [])

    .controller('MenuController', ['$scope', function($scope) {

      $scope.blur = true;
      $scope.checked = true;

      $scope.toggleBlur = function() {
        $scope.blur = !$scope.blur;
      };

      $scope.forceBlur = function() {
        $scope.blur = true;
      };

      $scope.images = [
        {
          "celeb": "Shah Rukh Khan",
          "path": "http://www.starok.com/beta/html/photos/more/shahrukh-khan-5625.jpg"
        },
        {
          "celeb": "Madhuri Dixit",
          "path": "http://bollywoodfans.in/uploads/gallery/category_24/gallery_4_24_53681.jpg"
        }
      ];

    }]);
