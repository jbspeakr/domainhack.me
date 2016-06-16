'use strict';

angular.module('dMakr').
    controller('MainCtrl', ['$scope', 'data', 'builder', function ($scope, data, builder) {
        $scope.domainhacks = [];
        $scope.domains = data.loadDomains();

        $scope.$watch('search', function (input) {
            var domainhacks = [];

            angular.forEach($scope.domains, function (domain){
                if(!input) {
                  return;
                };
                var match = input.toLowerCase().match(domain['tld']);
                if(match){
                    var domainhack = builder.make(input, domain);
                    domainhacks.push(domainhack);
                }
            });

            $scope.domainhacks = domainhacks;
    });
}]);
