angular.module('fwf.weather', [])

  .controller('WeatherCtrl', function (weather, settings, $scope, $stateParams, $http, $ionicLoading) {

    $scope.city = $stateParams.city;
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

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
      getWeather: function (lat, long) {
        var API_URL = '/api/forecast/' + lat + ',' + long + '?units=';
        if (settings.scale === 'F') {
          return $http
            .get(API_URL + 'us');
        } else {
          return $http
            .get(API_URL + 'si');
        }
      }
    }
  });
