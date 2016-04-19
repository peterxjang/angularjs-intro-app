/* global angular */
(function() {
  "use strict";
  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.message = "Hello my friend";

    $scope.reviews = [
      {text: "Angular is good!", rating: 4, author: "Emily Post"},
      {text: "Angular is bad!", rating: 1, author: "Angela Pearson"},
      {text: "Angular is better than Chinese Checkers.", rating: 3, author: "Burton Wax"}
    ];

    $scope.addReview = function(inputReviewText) {
      if (inputReviewText) {
        $scope.reviews.push({text: inputReviewText});
        $scope.newReview = '';
      }
    };

    $scope.deleteReview = function(inputIndex) {
      console.log(inputIndex);
      $scope.reviews.splice(inputIndex, 1);
    };

    $scope.isPositiveReview = function(inputReview) {
      return (inputReview.text.indexOf('bad') === -1);
    };

    window.$scope = $scope;
  });
})();
