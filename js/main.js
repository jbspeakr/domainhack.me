var dmakr = angular.module('dMakr', []);

dmakr.config(function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'view.html',
            controller: 'DomainController'
        }).
        otherwise('/');
});

dmakr.controller('DomainController', function($scope, $http) {
    $scope.domainhacks = [];

    $http.get('TLDs.json').
        then(function(res){
            $scope.tlds = res.data;
        }
    );

    $scope.$watch('search', function(input) {
        var tmp = [];
        for(var i = 0; i<$scope.tlds.length; i++){
            var match = input.toLowerCase().match($scope.tlds[i]['tld']);
            if(match){
                var hack = createDomainHack(input, $scope.tlds[i]);
                tmp.push(hack);
            }
        }
        $scope.domainhacks = tmp;
    });
});

function createDomainHack(input, tld) {
    var index = input.indexOf(tld['tld']);
    var prefix = input.substring(0, index);
    var suffix = input.substring(index + tld['tld'].length, input.length);

    var domainhack = [];
    domainhack['tld'] = tld['tld'];
    domainhack['country'] = tld['country'];
    domainhack['name'] = (prefix ? prefix : 'xxx');
    domainhack['suffix'] = (suffix ? suffix : '');
    return domainhack;
}
