var React = require('react');

var UserProfile = React.createClass({
    render: function(){
        return (
            <div>
                <p>User Profil!</p>
                <p>Username: {this.props.username}</p>
                <p> Bio: {this.props.bio.name} </p>
                <p></p>
            </div>
        )
    }
});

module.exports = UserProfile;