'use strict';

angular.module('dMakr', []);

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

'use strict';

angular.module('dMakr').
  factory('data', [function () {
  	return {
  		loadDomains: function () {
		    return [
            {
                "country": "Air transport",
                "tld": "aero"
            },
            {
                "country": "Organisations and individuals in the Asia-Pacific region",
                "tld": "asia"
            },
            {
                "country": "Business",
                "tld": "biz"
            },
            {
                "country": "Catalan",
                "tld": "cat"
            },
            {
                "country": "Commercial organizations",
                "tld": "com"
            },
            {
                "country": "Cooperatives",
                "tld": "coop"
            },
            {
                "country": "Educational establishments",
                "tld": "edu"
            },
            {
                "country": "US government",
                "tld": "gov"
            },
            {
                "country": "Informational sites",
                "tld": "info"
            },
            {
                "country": "international organizations",
                "tld": "int"
            },
            {
                "country": "Employment-related sites",
                "tld": "jobs"
            },
            {
                "country": "US military",
                "tld": "mil"
            },
            {
                "country": "Mobile",
                "tld": "mobi"
            },
            {
                "country": "Museums",
                "tld": "museum"
            },
            {
                "country": "Families and individuals",
                "tld": "name"
            },
            {
                "country": "Network",
                "tld": "net"
            },
            {
                "country": "Non-profit organizations",
                "tld": "org"
            },
            {
                "country": "Profession",
                "tld": "pro"
            },
            {
                "country": "Telephone",
                "tld": "tel"
            },
            {
                "country": "Travel",
                "tld": "travel"
            },
            {
                "country": "Ascension Island",
                "tld": "ac"
            },
            {
                "country": "Andorra",
                "tld": "ad"
            },
            {
                "country": "United Arab Emirates",
                "tld": "ae"
            },
            {
                "country": "Afghanistan",
                "tld": "af"
            },
            {
                "country": "Antigua and Barbuda",
                "tld": "ag"
            },
            {
                "country": "Anguilla",
                "tld": "ai"
            },
            {
                "country": "Albania",
                "tld": "al"
            },
            {
                "country": "Armenia",
                "tld": "am"
            },
            {
                "country": "Netherlands Antilles",
                "tld": "an"
            },
            {
                "country": "Angola",
                "tld": "ao"
            },
            {
                "country": "Antarctica",
                "tld": "aq"
            },
            {
                "country": "Argentina",
                "tld": "ar"
            },
            {
                "country": "American Samoa",
                "tld": "as"
            },
            {
                "country": "Austria",
                "tld": "at"
            },
            {
                "country": "Australia",
                "tld": "au"
            },
            {
                "country": "Aruba",
                "tld": "aw"
            },
            {
                "country": "\u00c5land Islands",
                "tld": "ax"
            },
            {
                "country": "Azerbaijan",
                "tld": "az"
            },
            {
                "country": "Bosnia and Herzegovina",
                "tld": "ba"
            },
            {
                "country": "Barbados",
                "tld": "bb"
            },
            {
                "country": "Bangladesh",
                "tld": "bd"
            },
            {
                "country": "Belgium",
                "tld": "be"
            },
            {
                "country": "Burkina Faso",
                "tld": "bf"
            },
            {
                "country": "Bulgaria",
                "tld": "bg"
            },
            {
                "country": "Bahrain",
                "tld": "bh"
            },
            {
                "country": "Burundi",
                "tld": "bi"
            },
            {
                "country": "Benin",
                "tld": "bj"
            },
            {
                "country": "Saint Barth\u00e9lemy",
                "tld": "bl"
            },
            {
                "country": "Bermuda",
                "tld": "bm"
            },
            {
                "country": "Brunei",
                "tld": "bn"
            },
            {
                "country": "Bolivia",
                "tld": "bo"
            },
            {
                "country": "Brazil",
                "tld": "br"
            },
            {
                "country": "Bahamas",
                "tld": "bs"
            },
            {
                "country": "Bhutan",
                "tld": "bt"
            },
            {
                "country": "Bouvet Island",
                "tld": "bv"
            },
            {
                "country": "Botswana",
                "tld": "bw"
            },
            {
                "country": "Belarus",
                "tld": "by"
            },
            {
                "country": "Belize",
                "tld": "bz"
            },
            {
                "country": "Canada",
                "tld": "ca"
            },
            {
                "country": "Cocos (Keeling) Islands",
                "tld": "cc"
            },
            {
                "country": "Democratic Republic of the Congo",
                "tld": "cd"
            },
            {
                "country": "Central African Republic",
                "tld": "cf"
            },
            {
                "country": "Republic of the Congo",
                "tld": "cg"
            },
            {
                "country": "Switzerland",
                "tld": "ch"
            },
            {
                "country": "C\u00f4te d'Ivoire",
                "tld": "ci"
            },
            {
                "country": "Cook Islands",
                "tld": "ck"
            },
            {
                "country": "Chile",
                "tld": "cl"
            },
            {
                "country": "Cameroon",
                "tld": "cm"
            },
            {
                "country": "People's Republic of China",
                "tld": "cn"
            },
            {
                "country": "Colombia",
                "tld": "co"
            },
            {
                "country": "Costa Rica",
                "tld": "cr"
            },
            {
                "country": "Cuba",
                "tld": "cu"
            },
            {
                "country": "Cape Verde",
                "tld": "cv"
            },
            {
                "country": "Christmas Island",
                "tld": "cx"
            },
            {
                "country": "Cyprus",
                "tld": "cy"
            },
            {
                "country": "Czech Republic",
                "tld": "cz"
            },
            {
                "country": "Germany",
                "tld": "de"
            },
            {
                "country": "Djibouti",
                "tld": "dj"
            },
            {
                "country": "Denmark",
                "tld": "dk"
            },
            {
                "country": "Dominica",
                "tld": "dm"
            },
            {
                "country": "Dominican Republic",
                "tld": "do"
            },
            {
                "country": "Algeria",
                "tld": "dz"
            },
            {
                "country": "Ecuador",
                "tld": "ec"
            },
            {
                "country": "Estonia",
                "tld": "ee"
            },
            {
                "country": "Egypt",
                "tld": "eg"
            },
            {
                "country": "Western Sahara",
                "tld": "eh"
            },
            {
                "country": "Eritrea",
                "tld": "er"
            },
            {
                "country": "Spain",
                "tld": "es"
            },
            {
                "country": "Ethiopia",
                "tld": "et"
            },
            {
                "country": "European Union",
                "tld": "eu"
            },
            {
                "country": "Finland",
                "tld": "fi"
            },
            {
                "country": "Fiji",
                "tld": "fj"
            },
            {
                "country": "Falkland Islands",
                "tld": "fk"
            },
            {
                "country": "Federated States of Micronesia",
                "tld": "fm"
            },
            {
                "country": "Faroe Islands",
                "tld": "fo"
            },
            {
                "country": "France",
                "tld": "fr"
            },
            {
                "country": "Gabon",
                "tld": "ga"
            },
            {
                "country": "United Kingdom",
                "tld": "gb"
            },
            {
                "country": "Grenada",
                "tld": "gd"
            },
            {
                "country": "Georgia",
                "tld": "ge"
            },
            {
                "country": "French Guiana",
                "tld": "gf"
            },
            {
                "country": "Guernsey",
                "tld": "gg"
            },
            {
                "country": "Ghana",
                "tld": "gh"
            },
            {
                "country": "Gibraltar",
                "tld": "gi"
            },
            {
                "country": "Greenland",
                "tld": "gl"
            },
            {
                "country": "Gambia",
                "tld": "gm"
            },
            {
                "country": "Guinea",
                "tld": "gn"
            },
            {
                "country": "Guadeloupe",
                "tld": "gp"
            },
            {
                "country": "Equatorial Guinea",
                "tld": "gq"
            },
            {
                "country": "Greece",
                "tld": "gr"
            },
            {
                "country": "South Georgia and the South Sandwich Islands",
                "tld": "gs"
            },
            {
                "country": "Guatemala",
                "tld": "gt"
            },
            {
                "country": "Guam",
                "tld": "gu"
            },
            {
                "country": "Guinea-Bissau",
                "tld": "gw"
            },
            {
                "country": "Guyana",
                "tld": "gy"
            },
            {
                "country": "Hong Kong",
                "tld": "hk"
            },
            {
                "country": "Heard Island and McDonald Islands",
                "tld": "hm"
            },
            {
                "country": "Honduras",
                "tld": "hn"
            },
            {
                "country": "Croatia",
                "tld": "hr"
            },
            {
                "country": "Haiti",
                "tld": "ht"
            },
            {
                "country": "Hungary",
                "tld": "hu"
            },
            {
                "country": "Indonesia",
                "tld": "id"
            },
            {
                "country": "Ireland",
                "tld": "ie"
            },
            {
                "country": "Israel",
                "tld": "il"
            },
            {
                "country": "Isle of Man",
                "tld": "im"
            },
            {
                "country": "India",
                "tld": "in"
            },
            {
                "country": "British Indian Ocean Territory",
                "tld": "io"
            },
            {
                "country": "Iraq",
                "tld": "iq"
            },
            {
                "country": "Iran",
                "tld": "ir"
            },
            {
                "country": "Iceland",
                "tld": "is"
            },
            {
                "country": "Italy",
                "tld": "it"
            },
            {
                "country": "Jersey",
                "tld": "je"
            },
            {
                "country": "Jamaica",
                "tld": "jm"
            },
            {
                "country": "Jordan",
                "tld": "jo"
            },
            {
                "country": "Japan",
                "tld": "jp"
            },
            {
                "country": "Kenya",
                "tld": "ke"
            },
            {
                "country": "Kyrgyzstan",
                "tld": "kg"
            },
            {
                "country": "Cambodia",
                "tld": "kh"
            },
            {
                "country": "Kiribati",
                "tld": "ki"
            },
            {
                "country": "Comoros",
                "tld": "km"
            },
            {
                "country": "Saint Kitts and Nevis",
                "tld": "kn"
            },
            {
                "country": "North Korea",
                "tld": "kp"
            },
            {
                "country": "South Korea",
                "tld": "kr"
            },
            {
                "country": "Kuwait",
                "tld": "kw"
            },
            {
                "country": "Cayman Islands",
                "tld": "ky"
            },
            {
                "country": "Kazakhstan",
                "tld": "kz"
            },
            {
                "country": "Laos",
                "tld": "la"
            },
            {
                "country": "Lebanon",
                "tld": "lb"
            },
            {
                "country": "Saint Lucia",
                "tld": "lc"
            },
            {
                "country": "Liechtenstein",
                "tld": "li"
            },
            {
                "country": "Sri Lanka",
                "tld": "lk"
            },
            {
                "country": "Liberia",
                "tld": "lr"
            },
            {
                "country": "Lesotho",
                "tld": "ls"
            },
            {
                "country": "Lithuania",
                "tld": "lt"
            },
            {
                "country": "Luxembourg",
                "tld": "lu"
            },
            {
                "country": "Latvia",
                "tld": "lv"
            },
            {
                "country": "Libya",
                "tld": "ly"
            },
            {
                "country": "Morocco",
                "tld": "ma"
            },
            {
                "country": "Monaco",
                "tld": "mc"
            },
            {
                "country": "Moldova",
                "tld": "md"
            },
            {
                "country": "Montenegro",
                "tld": "me"
            },
            {
                "country": "Madagascar",
                "tld": "mg"
            },
            {
                "country": "Marshall Islands",
                "tld": "mh"
            },
            {
                "country": "Republic of Macedonia",
                "tld": "mk"
            },
            {
                "country": "Mali",
                "tld": "ml"
            },
            {
                "country": "Myanmar",
                "tld": "mm"
            },
            {
                "country": "Mongolia",
                "tld": "mn"
            },
            {
                "country": "Macau",
                "tld": "mo"
            },
            {
                "country": "Northern Mariana Islands",
                "tld": "mp"
            },
            {
                "country": "Martinique",
                "tld": "mq"
            },
            {
                "country": "Mauritania",
                "tld": "mr"
            },
            {
                "country": "Montserrat",
                "tld": "ms"
            },
            {
                "country": "Malta",
                "tld": "mt"
            },
            {
                "country": "Mauritius",
                "tld": "mu"
            },
            {
                "country": "Maldives",
                "tld": "mv"
            },
            {
                "country": "Malawi",
                "tld": "mw"
            },
            {
                "country": "Mexico",
                "tld": "mx"
            },
            {
                "country": "Malaysia",
                "tld": "my"
            },
            {
                "country": "Mozambique",
                "tld": "mz"
            },
            {
                "country": "Namibia",
                "tld": "na"
            },
            {
                "country": "New Caledonia",
                "tld": "nc"
            },
            {
                "country": "Niger",
                "tld": "ne"
            },
            {
                "country": "Norfolk Island",
                "tld": "nf"
            },
            {
                "country": "Nigeria",
                "tld": "ng"
            },
            {
                "country": "Nicaragua",
                "tld": "ni"
            },
            {
                "country": "Netherlands",
                "tld": "nl"
            },
            {
                "country": "Norway",
                "tld": "no"
            },
            {
                "country": "Nepal",
                "tld": "np"
            },
            {
                "country": "Nauru",
                "tld": "nr"
            },
            {
                "country": "Niue",
                "tld": "nu"
            },
            {
                "country": "New Zealand",
                "tld": "nz"
            },
            {
                "country": "Oman",
                "tld": "om"
            },
            {
                "country": "Panama",
                "tld": "pa"
            },
            {
                "country": "Peru",
                "tld": "pe"
            },
            {
                "country": "French Polynesia",
                "tld": "pf"
            },
            {
                "country": "Papua New Guinea",
                "tld": "pg"
            },
            {
                "country": "Philippines",
                "tld": "ph"
            },
            {
                "country": "Pakistan",
                "tld": "pk"
            },
            {
                "country": "Poland",
                "tld": "pl"
            },
            {
                "country": "Saint Pierre and Miquelon",
                "tld": "pm"
            },
            {
                "country": "Pitcairn Islands",
                "tld": "pn"
            },
            {
                "country": "Puerto Rico",
                "tld": "pr"
            },
            {
                "country": "Palestine",
                "tld": "ps"
            },
            {
                "country": "Portugal",
                "tld": "pt"
            },
            {
                "country": "Palau",
                "tld": "pw"
            },
            {
                "country": "Paraguay",
                "tld": "py"
            },
            {
                "country": "Qatar",
                "tld": "qa"
            },
            {
                "country": "R\u00e9union",
                "tld": "re"
            },
            {
                "country": "Romania",
                "tld": "ro"
            },
            {
                "country": "Serbia",
                "tld": "rs"
            },
            {
                "country": "Russia",
                "tld": "ru"
            },
            {
                "country": "Rwanda",
                "tld": "rw"
            },
            {
                "country": "Saudi Arabia",
                "tld": "sa"
            },
            {
                "country": "Solomon Islands",
                "tld": "sb"
            },
            {
                "country": "Seychelles",
                "tld": "sc"
            },
            {
                "country": "Sudan",
                "tld": "sd"
            },
            {
                "country": "Sweden",
                "tld": "se"
            },
            {
                "country": "Singapore",
                "tld": "sg"
            },
            {
                "country": "Saint Helena",
                "tld": "sh"
            },
            {
                "country": "Slovenia",
                "tld": "si"
            },
            {
                "country": "Svalbard and Jan Mayen",
                "tld": "sj"
            },
            {
                "country": "Slovakia",
                "tld": "sk"
            },
            {
                "country": "Sierra Leone",
                "tld": "sl"
            },
            {
                "country": "San Marino",
                "tld": "sm"
            },
            {
                "country": "Senegal",
                "tld": "sn"
            },
            {
                "country": "Somalia",
                "tld": "so"
            },
            {
                "country": "Suriname",
                "tld": "sr"
            },
            {
                "country": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
                "tld": "st"
            },
            {
                "country": "Soviet Union",
                "tld": "su"
            },
            {
                "country": "El Salvador",
                "tld": "sv"
            },
            {
                "country": "Syria",
                "tld": "sy"
            },
            {
                "country": "Swaziland",
                "tld": "sz"
            },
            {
                "country": "Turks and Caicos Islands",
                "tld": "tc"
            },
            {
                "country": "Chad",
                "tld": "td"
            },
            {
                "country": "French Southern Territories",
                "tld": "tf"
            },
            {
                "country": "Togo",
                "tld": "tg"
            },
            {
                "country": "Thailand",
                "tld": "th"
            },
            {
                "country": "Tajikistan",
                "tld": "tj"
            },
            {
                "country": "Tokelau",
                "tld": "tk"
            },
            {
                "country": "East Timor",
                "tld": "tl"
            },
            {
                "country": "Turkmenistan",
                "tld": "tm"
            },
            {
                "country": "Tunisia",
                "tld": "tn"
            },
            {
                "country": "Tonga",
                "tld": "to"
            },
            {
                "country": "East Timor",
                "tld": "tp"
            },
            {
                "country": "Turkey",
                "tld": "tr"
            },
            {
                "country": "Trinidad and Tobago",
                "tld": "tt"
            },
            {
                "country": "Tuvalu",
                "tld": "tv"
            },
            {
                "country": "Taiwan",
                "tld": "tw"
            },
            {
                "country": "Tanzania",
                "tld": "tz"
            },
            {
                "country": "Ukraine",
                "tld": "ua"
            },
            {
                "country": "Uganda",
                "tld": "ug"
            },
            {
                "country": "United Kingdom",
                "tld": "uk"
            },
            {
                "country": "US Minor Outlying Islands",
                "tld": "um"
            },
            {
                "country": "United States",
                "tld": "us"
            },
            {
                "country": "Uruguay",
                "tld": "uy"
            },
            {
                "country": "Uzbekistan",
                "tld": "uz"
            },
            {
                "country": "Vatican City",
                "tld": "va"
            },
            {
                "country": "Saint Vincent and the Grenadines",
                "tld": "vc"
            },
            {
                "country": "Venezuela",
                "tld": "ve"
            },
            {
                "country": "British Virgin Islands",
                "tld": "vg"
            },
            {
                "country": "United States Virgin Islands",
                "tld": "vi"
            },
            {
                "country": "Vietnam",
                "tld": "vn"
            },
            {
                "country": "Vanuatu",
                "tld": "vu"
            },
            {
                "country": "Wallis and Futuna",
                "tld": "wf"
            },
            {
                "country": "Samoa",
                "tld": "ws"
            },
            {
                "country": "Yemen",
                "tld": "ye"
            },
            {
                "country": "Mayotte",
                "tld": "yt"
            },
            {
                "country": "Yugoslavia",
                "tld": "yu"
            },
            {
                "country": "South Africa",
                "tld": "za"
            },
            {
                "country": "Zambia",
                "tld": "zm"
            },
            {
                "country": "Zimbabwe",
                "tld": "zw"
            }
        ];
  		}
  	};
}]);

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
