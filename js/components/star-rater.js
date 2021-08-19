let React = require('react');

let StarRater = React.createClass({
    render: function() {
        let stars = [];
        for (let i=0; i<5; i++) {
            let className;
            if (i < this.props.rating || 0) {
                className = 'fa fa-star';
            }
            else {
                className = 'fa fa-star-o';
            }
            let star = (
                <i className={className} key={i}
                   onClick={this.props.onChange.bind(null, i + 1)}>
                </i>
            );
            stars.push(star);
        }

        return (
            <span className="star-rater">
                {stars}
            </span>
        );
    }
});

module.exports = StarRater;