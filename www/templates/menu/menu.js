angular.module('fwf.menu', [])
  .controller('MenuCtrl', function (location, $stateParams, $scope) {
    $scope.params = $stateParams;
    $scope.favorites = location.favorites;

    $scope.$on('menuItemChanged', function () {
      $scope.favorites = location.favorites;
    });

    $scope.makeFavorite = function (obj) {
      location.addFavorite(obj);
      $scope.$emit('menuItemChanged');
    }
  })
''
