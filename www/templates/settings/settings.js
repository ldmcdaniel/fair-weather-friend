angular.module('fwf.settings', [])

  .controller('SettingsCtrl', function (settings, $scope) {
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

  })

  .factory('settings', function () {
    return {
      scale: 'F',
      precision: 1
    }
  });
