angular.module('fwf.settings', [])

  .controller('SettingsCtrl', function (location, settings, $scope) {
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
        return localStorage.getItem('scale') || 'F';
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
  })

  .factory('location', function (weather) {
      var defaultFavorites = [{
        city: 'Cupertiono, CA',
        lat: '37.3190',
        long: '-122.0293'
      }, {
        city: 'Mountain View, CA',
        lat: '37.3897',
        long: '-122.0816'
      }, {
        city: 'Redmond, WA',
        lat: '47.6786',
        long: '-122.1310'
      }, {
        city: 'Nashville, TN',
        lat: '36.1658',
        long: '-86.7777'
      }];

    if (!localStorage.favorites) {
      localStorage.favorites = JSON.stringify(defaultFavorites);
    }

    return {
      get favorites() {
        var json = localStorage.getItem('favorites');
        return JSON.parse(json);
      },
      set favorites(f) {
        var json = JSON.stringify(f)
        localStorage.setItem('favorites', json);
      },
      addFavorite: function (f) {
        this.favorites = this.favorites.concat(f);
      },
      removeFavorite: function (cityName) {
        this.favorites = this.favorites.filter(function (fav) {
          return fav.city !== cityName;
        });
      }
    }
  });

