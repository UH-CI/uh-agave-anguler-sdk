/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

'use strict';
angular.module('AgavePlatformScienceAPILib').factory('ClientsController', ['$q', 'Configuration', 'HttpClient', 'APIHelper', function ($q, Configuration, HttpClient, APIHelper) {
    return {
        /**
         * List existing clients
         *
         * @return {promise<MultipleClientResponse>}
         */
        listClients: function () {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/clients/v2/';

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'GET',
                queryUrl: queryUrl,
                headers: headers,
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
         * Create a new client
         * @param {ClientRequest} body    Required parameter: The api client to create
         *
         * @return {promise<SingleClientResponse>}
         */
        addClient: function (body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/clients/v2/';

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json',
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'POST',
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = new HttpClient(config);

            //Create promise to return
            var deferred = $q.defer();

            //process response
            response.then(function (result) {
                deferred.resolve(result.body);
            }, function (result) {
                //Error handling for custom HTTP status codes
                if (result.code === 400) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'Raised if a user supplies an invalid username format',
                        errorCode: 400,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 403) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'Failed to authenticate the user',
                        errorCode: 403,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 404) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'The user profile cannot be found',
                        errorCode: 404,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code === 500) {
                    deferred.reject(APIHelper.appendContext({
                        errorMessage: 'The service was unable to query the profile database',
                        errorCode: 500,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                }

                deferred.reject(APIHelper.appendContext({
                    errorMessage: 'HTTP Response Not OK',
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deferred.promise;
        },
        /**
         * Returns a detailed description of a named client.
         * @param {string} clientName    Required parameter: The name of the client to be deleted
         *
         * @return {promise<MultipleClientResponse>}
         */
        getClient: function (clientName) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/clients/v2/{clientName}';

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                'clientName': clientName
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'GET',
                queryUrl: queryUrl,
                headers: headers,
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
         * Immediately deletes this client and renders the API keys useless.
         * @param {string} clientName    Required parameter: The name of the client to be deleted
         *
         * @return {promise<EmptyClientResponse>}
         */
        deleteClient: function (clientName) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/clients/v2/{clientName}';

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                'clientName': clientName
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'DELETE',
                queryUrl: queryUrl,
                headers: headers,
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
         * Add a new API subscription to the given client
         * @param {ClientSubscriptionRequest} body    Required parameter: The api client to create
         * @param {string} clientName    Required parameter: The name of the client to be subscribe to this api
         *
         * @return {promise<SingleSubscriptionResponse>}
         */
        addClientAPISubscription: function (body, clientName) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/clients/v2/{clientName}/subscriptions';

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                'clientName': clientName
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json',
                'content-type': 'application/json; charset=utf-8',
                'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'POST',
                queryUrl: queryUrl,
                headers: headers,
                body: body
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
         * Unsubscribe the client from all APIs
         * @param {string} clientName    Required parameter: The name of the client to be deleted
         *
         * @return {promise<EmptyClientResponse>}
         */
        deleteClearClientAPISubscriptions: function (clientName) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/clients/v2/{clientName}/subscriptions';

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                'clientName': clientName
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'DELETE',
                queryUrl: queryUrl,
                headers: headers,
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
         * Lists all APIs to which the client is subscribed
         * @param {string} clientName    Required parameter: The name of the client to be deleted
         * @param {int|null} limit    Optional parameter: The maximum number of results returned from this query
         * @param {int|null} offset    Optional parameter: The number of results skipped in the result set returned from this query
         *
         * @return {promise<MultipleSubscriptionResponse>}
         */
        listClientApiSubscriptions: function (clientName, limit, offset) {
            //Assign default values
            limit = limit || 100;
            offset = offset || 0;

            //prepare query string for API call
            var baseUri = Configuration.BASEURI;
            var queryBuilder = baseUri + '/clients/v2/{clientName}/subscriptions';

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                'clientName': clientName
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                'limit': (null !== limit) ? limit : 100,
                'offset': (null !== offset) ? offset : 0
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: 'GET',
                queryUrl: queryUrl,
                headers: headers,
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
