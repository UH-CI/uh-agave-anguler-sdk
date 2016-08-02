/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

'use strict';
angular.module('AgavePlatformScienceAPILib').factory('ProfilesController', function ($q, Configuration, HttpClient, APIHelper) {
    return {
        /**
         * Find api user profile by their api username
         * @param {string} username    Required parameter: The username of a valid api user
         *
         * @return {promise<Profile>}
         */
        getProfile: function (username) {
            //Assign default values
            username = username || "me";

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{username}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "username": username
            });

            //Process query parameters
            // queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            //     "naked": true
            // });

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
                if (result.body.result) {
                    deffered.resolve(result.body.result);
                } else {
                    deffered.resolve(result.body);
                }
            }, function (result) {
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Delete all internal users created by the authenticated user.
         * @param {string} apiUsername    Required parameter: The username of a valid api user
         *
         * @return {promise<void>}
         */
        deleteClearInternalUsers: function (apiUsername) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{apiUsername}/users";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "apiUsername": apiUsername
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
         * Create or update an internal user.
         * @param {string} apiUsername    Required parameter: The username of a valid api user
         * @param {ProfileRequest} body    Required parameter: The internal user to create.
         *
         * @return {promise<InternalUser>}
         */
        addInternalUser: function (apiUsername, body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{apiUsername}/users";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "apiUsername": apiUsername
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
         * Create or update the given internal user.
         * @param {string} apiUsername    Required parameter: The username of a valid api user
         * @param {ProfileRequest} body    Required parameter: A JSON description of the internal user to update
         * @param {string} internalUsername    Required parameter: The username of a valid internal user
         *
         * @return {promise<InternalUser>}
         */
        updateInternalUser: function (apiUsername, body, internalUsername) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{apiUsername}/users/{internalUsername}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "apiUsername": apiUsername,
                "internalUsername": internalUsername
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
         * Delete all internal users created by the authenticated user.
         * @param {string} apiUsername    Required parameter: The username of a valid api user
         * @param {string} internalUsername    Required parameter: The username of a valid internal user
         *
         * @return {promise<InternalUser>}
         */
        deleteInternalUser: function (apiUsername, internalUsername) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{apiUsername}/users/{internalUsername}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "apiUsername": apiUsername,
                "internalUsername": internalUsername
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
         * Find authenticated user profile
         * @param {string|null} email    Optional parameter: The user email address
         * @param {string|null} name    Optional parameter: The user full name
         * @param {string|null} username    Optional parameter: The username to search for
         *
         * @return {promise<array>}
         */
        listProfiles: function (email, name, username) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/";

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true,
                "email": email,
                "name": name,
                "username": username
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
                //Error handling for custom HTTP status codes
                if (result.code == 400) {
                    deffered.reject(APIHelper.appendContext({
                        errorMessage: "Raised if a user supplies an invalid username format",
                        errorCode: 400,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code == 403) {
                    deffered.reject(APIHelper.appendContext({
                        errorMessage: "Failed to authenticate the user",
                        errorCode: 403,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code == 404) {
                    deffered.reject(APIHelper.appendContext({
                        errorMessage: "The user profile cannot be found",
                        errorCode: 404,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                } else if (result.code == 500) {
                    deffered.reject(APIHelper.appendContext({
                        errorMessage: "The service was unable to query the profile database",
                        errorCode: 500,
                        errorResponse: result.message
                    }, result.getContext()));
                    return;
                }

                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * List all internal users created by the authenticated user
         * @param {string} apiUsername    Required parameter: The username of a valid api user
         * @param {string|null} email    Optional parameter: The email address of the internal user
         * @param {string|null} name    Optional parameter: The full name of the internal user
         * @param {string|null} username    Optional parameter: The username of the internal user
         *
         * @return {promise<array>}
         */
        listInternalUsers: function (apiUsername, email, name, username) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{apiUsername}/users";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "apiUsername": apiUsername
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true,
                "email": email,
                "name": name,
                "username": username
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
         * Find api user profile by their api username
         * @param {string} apiUsername    Required parameter: The username of a valid api user
         * @param {string} internalUsername    Required parameter: The username of a valid internal user
         *
         * @return {promise<InternalUser>}
         */
        getInternalUser: function (apiUsername, internalUsername) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{apiUsername}/users/{internalUsername}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "apiUsername": apiUsername,
                "internalUsername": internalUsername
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
         * Add a new user profile
         * @param {Profile} body    Required parameter: The user profile to add
         *
         * @return {promise<Profile>}
         */
        addProfile: function (body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2";

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
         * Update an existing user profile
         * @param {string} apiUsername    Required parameter: The username of the profile to update
         * @param {ProfileRequest} body    Required parameter: The updated profile
         *
         * @return {promise<Profile>}
         */
        updateProfile: function (apiUsername, body) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/profiles/v2/{apiUsername}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "apiUsername": apiUsername
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
        }
    }
});
