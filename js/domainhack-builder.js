'use strict';

angular.module('dMakr').
  factory('builder', [function () { 
  	return {
  		make: function (input, tld) {
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
  	};
}]);
