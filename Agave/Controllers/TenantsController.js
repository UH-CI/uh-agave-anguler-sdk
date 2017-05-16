/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

'use strict';
angular.module('AgavePlatformScienceAPILib').factory('TenantsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', function ($q, Configuration, HttpClient, APIHelper) {
    return {
        /**
         * Get a list of available tenants.
         * @param {int|null} limit    Optional parameter: The maximum number of results returned from this query
         * @param {int|null} offset    Optional parameter: The number of results skipped in the result set returned from this query
         * @param {Dictionary} queryParameters    Optional parameter: Additional optional query parameters are supported by this endpoint
         *
         * @return {promise<array>}
         */
        listTenants: function (limit, offset, queryParameters) {
            //Assign default values
            limit = limit || 100;
            offset = offset || 0;
            queryParameters = queryParameters || null;

            //prepare query string for API call
            var baseUri = 'https://ikeauth.its.hawaii.edu';
            var queryBuilder = baseUri + '/tenants/';

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                'naked': true,
                'limit': (null !== limit) ? limit : 100,
                'offset': (null !== offset) ? offset : 0
            });

            //append optional parameters to the query
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, queryParameters);

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json'
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'GET',
                queryUrl: queryUrl,
                headers: headers,
                cache: true
            };

            var response = new HttpClient(config);

            //Create promise to return
            var deferred = $q.defer();

            //process response
            response.then(function (result) {
                deferred.resolve(result.body);
            }, function (result) {
                deferred.reject(APIHelper.appendContext({
                    errorMessage: 'HTTP Response Not OK',
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deferred.promise;
        },

        /**
         * Get a list of available tenants.
         * @param {int|null} limit    Optional parameter: The maximum number of results returned from this query
         * @param {int|null} offset    Optional parameter: The number of results skipped in the result set returned from this query
         * @param {Dictionary} queryParameters    Optional parameter: Additional optional query parameters are supported by this endpoint
         *
         * @return {promise<array>}
         */
        getTenantDetails: function (tenantId, queryParameters) {
            //Assign default values
            queryParameters = queryParameters || null;

            //prepare query string for API call
            var baseUri = 'https://agaveapi.co';
            var queryBuilder = baseUri + '/tenants/' + tenantId;

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                'naked': true
            });

            //append optional parameters to the query
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, queryParameters);

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json'
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'GET',
                queryUrl: queryUrl,
                headers: headers,
                cache: true
            };

            var response = new HttpClient(config);

            //Create promise to return
            var deferred = $q.defer();

            //process response
            response.then(function (result) {
                deferred.resolve(result.body);
            }, function (result) {
                deferred.reject(APIHelper.appendContext({
                    errorMessage: 'HTTP Response Not OK',
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deferred.promise;
        }
    };
}]);
