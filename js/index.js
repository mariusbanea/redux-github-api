require('babel-polyfill');

let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;

let store = require('./store');
let RepositoryList = require('./components/repository-list');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <RepositoryList />
        </Provider>,
        document.getElementById('app')
    );
});

