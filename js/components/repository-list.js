let React = require('react');

let connect = require('react-redux').connect;

let Repository = require('./repository');

let actions = require('../actions/index');

let RepositoryList = React.createClass({
    addRepository: function() {
        let repositoryName = this.refs.repositoryName.value;
        // TODO: Add the repository to the state
        console.log(this.props);
        this.props.dispatch(
            actions.addRepository(repositoryName)
        );
    },
    render: function() {
        let repositories = this.props.repositories.map(function(repository) {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
});

let mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};

let Container = connect(mapStateToProps)(RepositoryList);

module.exports = Container;