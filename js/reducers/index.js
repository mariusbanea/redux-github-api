let actions = require('../actions/index');

let initialRepositoryState = [];

let repositoryReducer = function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.ADD_REPOSITORY) {
        return state.concat({
            name: action.repository,
            rating: null
        });
    }
    else if (action.type === actions.RATE_REPOSITORY) {
        // Find the index of the matching repository
        let index = -1;
        for (let i=0; i<state.length; i++) {
            let repository = state[i];
            if (repository.name === action.repository) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        let before = state.slice(0, i);
        let after = state.slice(i + 1);
        let newRepository = Object.assign({}, repository, {rating: action.rating});
        return before.concat(newRepository, after);
    } 
    else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
        // Find the index of the matching repository
        let index = -1;
        for (let i=0; i<state.length; i++) {
            let repository = state[i];
            if (repository.name === action.repository) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        let before = state.slice(0, i);
        let after = state.slice(i + 1);
        let newRepository = Object.assign({}, repository, {
            description: action.description || 'N/A'
        });
        return before.concat(newRepository, after);
    }
    else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
        // Find the index of the matching repository
        let index = -1;
        for (let i=0; i<state.length; i++) {
            let repository = state[i];
            if (repository.name === action.repository) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        let before = state.slice(0, i);
        let after = state.slice(i + 1);
        let newRepository = Object.assign({}, repository, {
            description: 'N/A'
        });
        return before.concat(newRepository, after);
    }

    return state;
};



exports.repositoryReducer = repositoryReducer;