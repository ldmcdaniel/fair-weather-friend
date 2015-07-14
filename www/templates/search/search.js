angular.module('fwf.search', [])

  .controller('SearchCtrl', function ($scope, $http) {
    //Debounce will regulate when information is sent from query

    $scope.queryChanged = _.debounce(function () {
      $http
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: { address: $scope.query }
        })
        .success(function (data) {
          console.log(data);
        });
    }, 2000);
  });
