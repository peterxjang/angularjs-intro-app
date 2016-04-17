/* global angular */
(function() {
  "use strict";
  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.message = "Hello my friend";

    $scope.reviews = [
      "Angular is good!",
      "Angular is bad!",
      "Angular is better than Chinese Checkers."
    ];

    $scope.addReview = function(inputReviewText) {
      if (inputReviewText) {
        $scope.reviews.push(inputReviewText);
        $scope.newReview = '';
      }
    };

    $scope.deleteReview = function(inputIndex) {
      console.log(inputIndex);
      $scope.reviews.splice(inputIndex, 1);
    };

    window.$scope = $scope;
  });
})();
