let React = require('react');

let connect = require('react-redux').connect;

let StarRater = require('./star-rater');

let actions = require('../actions/index');

let Repository = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(
            actions.fetchDescription(this.props.repository.name)
        );
    },
    changeRating: function(rating) {
        console.log(this.props);
        this.props.dispatch(
            actions.rateRepository(this.props.repository.name, rating)
        );
    },
    render: function() {
        console.log(this.props);
        return (
            <div className="repository">
                {this.props.repository.name} - {this.props.repository.description}
                &nbsp;
                <StarRater rating={this.props.repository.rating}
                           onChange={this.changeRating} />
            </div>
        );
    }
});

module.exports = Repository;

let Container = connect()(Repository);

module.exports = Container;