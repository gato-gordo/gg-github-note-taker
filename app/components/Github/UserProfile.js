var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function(){
        var bio = this.props.bio;
        var bioListItems = Object.keys(bio)
            .filter(bioKey => bio[bioKey])
            .map( (bioKey, i) => <li key={i} className="list-group-item">{keyToLabel(bioKey)}: {bio[bioKey]}</li>);

        return (
                <div>
                    <h2>User Profile</h2>
                    <ul className="list-group">
                        { bioListItems }
                    </ul>
                </div>
            );
    }
});

var keyToLabel = function(key){
    return  key
                .replace('_', ' ')
                .split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(' ');
}

module.exports = UserProfile;