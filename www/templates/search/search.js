angular.module('fwf.search', [])

  .controller('SearchCtrl', function ($scope, $http) {
    //Debounce will regulate when information is sent from query

    $scope.queryChanged = _.debounce(function () {
      $http
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: { address: $scope.query }
        })
        .success(function (data) {
          // for (var i = 0; i < data.results.length; i++) {
          //   console.log(data.results[i].formatted_address);
          // }
          $scope.results = data.results;
          // console.log($scope.results);

        });
    }, 1500);
  });
