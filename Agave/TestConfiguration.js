'use strict';
angular.module('AgavePlatformScienceAPILib').factory('TestConfiguration', function () {

    var Configuration = {};

    Configuration.BASEURI = 'https://api.araport.org/',
    Configuration.oAuthAccessToken = '';

    return Configuration;

});
