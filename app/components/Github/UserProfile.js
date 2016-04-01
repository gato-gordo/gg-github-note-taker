import React, { Component } from 'react';

const  UserProfile  = ({bio}) => {
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

UserProfile.propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
};

var keyToLabel = function(key){
    return  key
                .replace('_', ' ')
                .split(' ')
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(' ');
};

export default UserProfile;