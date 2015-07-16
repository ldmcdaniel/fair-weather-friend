angular.module('fwf.settings', [])

  .controller('SettingsCtrl', function (settings, $scope) {
    $scope.scale = settings.scale;
    $scope.precision = settings.precision;

    // $scope.precisionChanged = function () {
    //   console.log($scope.precision);
    // };

    $scope.$watch('precision', function () {
      settings.precision = $scope.precision;
    })

    $scope.$watch('scale', function () {
      settings.scale = $scope.scale;
    })

  })

  .factory('settings', function () {
    return {
      get scale() {
        return localStorage.getItem('scale') || 'us';
      },
      get precision() {
        return localStorage.getItem('precision') || '0';
      },
      set scale(s) {
        localStorage.setItem('scale', s);
      },
      set precision(p) {
        localStorage.setItem('precision', p);
      }
    }
  });
