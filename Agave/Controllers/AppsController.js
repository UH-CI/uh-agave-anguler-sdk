/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

'use strict';
angular.module('AgavePlatformScienceAPILib').factory('AppsController', function ($q, Configuration, HttpClient, APIHelper) {
    return {
        /**
         * Get a list of available applications.
         * @param {int|null} limit    Optional parameter: The maximum number of results returned from this query
         * @param {int|null} offset    Optional parameter: The number of results skipped in the result set returned from this query
         * @param {Dictionary} queryParameters    Optional parameter: Additional optional query parameters are supported by this endpoint
         *
         * @return {promise<array>}
         */
        listApps: function (limit, offset, queryParameters) {
            //Assign default values
            limit = limit || 100;
            offset = offset || 0;
            queryParameters = queryParameters || null;

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/";

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true,
                "limit": (null != limit) ? limit : 100,
                "offset": (null != offset) ? offset : 0
            });

            //append optional parameters to the query
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, queryParameters)

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
                cache: true
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Register and update new applications.
         * @param {Application|null} body    Optional parameter: The description of the app to add or update.
         *
         * @return {promise<Application>}
         */
        addApp: function (body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/";

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "content-type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "POST",
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Get details of an application by it's unique id.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         *
         * @return {promise<Application>}
         */
        getAppDetails: function (appId) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Update an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         * @param {Application} body    Required parameter: The description of the app to add or update.
         *
         * @return {promise<Application>}
         */
        updateApp: function (appId, body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "content-type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "POST",
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Edit an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         * @param {ApplicationAction} body    Required parameter: The operation to perform.
         *
         * @return {promise<Application>}
         */
        updateInvokeAppAction: function (appId, body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "content-type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "PUT",
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Deletes an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         *
         * @return {promise<void>}
         */
        deleteApp: function (appId) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "DELETE",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Grant a user permission for an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         * @param {PermissionModel} body    Required parameter: The permission add or update.
         *
         * @return {promise<PermissionModel>}
         */
        addAppPermission: function (appId, body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/pems";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "content-type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "POST",
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Deletes all permissions on an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         *
         * @return {promise<void>}
         */
        deleteClearAppPermissions: function (appId) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/pems";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "DELETE",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Get a specific user's permissions for an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         * @param {string} username    Required parameter: The username of the api user associated with the permission.
         *
         * @return {promise<PermissionModel>}
         */
        getAppPermission: function (appId, username) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/pems/{username}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId,
                "username": username
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Add or update a user's permission for an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         * @param {PermissionModel} body    Required parameter: The permission add or update.
         * @param {string} username    Required parameter: The username of the api user associated with the permission
         *
         * @return {promise<PermissionModel>}
         */
        updateAppPermission: function (appId, body, username) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/pems/{username}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId,
                "username": username
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "content-type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "POST",
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Deletes all permissions for the given user on an application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         * @param {string} username    Required parameter: The username of the api user associated with the permission
         *
         * @return {promise<void>}
         */
        deleteAppPermission: function (appId, username) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/pems/{username}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId,
                "username": username
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "DELETE",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Get a submission form for the named application.
         * @param {string} appId    Required parameter: The app for which to create the form
         *
         * @return {promise<string>}
         */
        getAppSubmissionForm: function (appId) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/form";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Get the permission for this application.
         * @param {string} appId    Required parameter: The id of the application. The application id is made up of the name and version separated by a dash.
         * @param {int|null} limit    Optional parameter: The maximum number of results returned from this query
         * @param {int|null} offset    Optional parameter: The number of results skipped in the result set returned from this query
         *
         * @return {promise<array>}
         */
        listAppPermissions: function (appId, limit, offset) {
            //Assign default values
            limit = limit || 100;
            offset = offset || 0;

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/pems";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true,
                "limit": (null != limit) ? limit : 100,
                "offset": (null != offset) ? offset : 0
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * List the event history of this app
         * @param {string} appId    Required parameter: The id of the app for which the history will be returned
         * @param {string|null} created    Optional parameter: The date the event occurred
         * @param {int|null} limit    Optional parameter: The maximum number of results returned from this query
         * @param {int|null} offset    Optional parameter: The number of results skipped in the result set returned from this query
         * @param {string|null} status    Optional parameter: The event status
         *
         * @return {promise<HistoryEvent>}
         */
        listAppHistory: function (appId, created, limit, offset, status) {
            //Assign default values
            limit = limit || 100;
            offset = offset || 0;

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/apps/v2/{appId}/history";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "appId": appId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true,
                "created": created,
                "limit": (null != limit) ? limit : 100,
                "offset": (null != offset) ? offset : 0,
                "status": status
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        }
    }
});