angular.module('fwf.weather', [])

  .controller('WeatherCtrl', function (weather, $scope, $stateParams, $http, $ionicLoading) {

    $scope.city = $stateParams.city;

    $ionicLoading.show();

    weather
      .getWeather($stateParams.lat, $stateParams.long)
      .success(function (data) {
        $scope.results = data;
        $ionicLoading.hide();
      })

  })

  .factory('weather', function (settings, $http) {
    return {
      getWeather: function (lat, long, units) {
        units = settings.scale;
        return $http
          .get('/api/forecast/' + lat + ',' + long + '?units=' + units)
      }
    }
  });
