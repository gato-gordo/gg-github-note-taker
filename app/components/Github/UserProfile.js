var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function(){
        return (
            <div>
                <p>User Profil!</p>
                <p>Username: {this.props.username}</p>
                <p> </p>
                <p></p>
            </div>
        )
    }
});

module.exports = UserProfile;