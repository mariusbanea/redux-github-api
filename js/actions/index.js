require('isomorphic-fetch');

let ADD_REPOSITORY = 'ADD_REPOSITORY';
let addRepository = function(repository) {
    return {
        type: ADD_REPOSITORY,
        repository: repository
    }
};



let RATE_REPOSITORY = 'RATE_REPOSITORY';
let rateRepository = function(repository, rating) {
    return {
        type: RATE_REPOSITORY,
        repository: repository,
        rating: rating
    };
};




let fetchDescription = function(repository) {
    return function(dispatch) {
        let url = 'https://api.github.com/repos/' + repository;
        return fetch(url)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let description = data.description;
            return dispatch(
                fetchDescriptionSuccess(repository, description)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchDescriptionError(repository, error)
            );
        });
    }
};


let FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
let fetchDescriptionSuccess = function(repository, description) {
    return {
        type: FETCH_DESCRIPTION_SUCCESS,
        repository: repository,
        description: description
    };
};



let FETCH_DESCRIPTION_ERROR= 'FETCH_DESCRIPTION_ERROR';
let fetchDescriptionError = function(repository, error) {
    return {
        type: FETCH_DESCRIPTION_ERROR,
        repository: repository,
        error: error
    };
};



exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;

exports.fetchDescription = fetchDescription;

exports.FETCH_DESCRIPTION_SUCCESS = FETCH_DESCRIPTION_SUCCESS;
exports.fetchDescriptionSuccess = fetchDescriptionSuccess;
exports.FETCH_DESCRIPTION_ERROR = FETCH_DESCRIPTION_ERROR;
exports.fetchDescriptionError = fetchDescriptionError;