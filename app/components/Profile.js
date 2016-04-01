import React from 'react';
import Router from 'react-router';
import Repos  from './Github/Repos';
import UserProfile from'./Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import getGithubInfo from '../utils/helpers';

var Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function(){
      return {
          notes: [],
          bio: {},
          repos: []
      };
    },
    componentDidMount: function(){
        this.ref = new Firebase('https://gg-github-notes.firebaseio.com/');
        var username = this.props.params.username;
        this.init(username);
    },
    unbindNotes: function(){
        this.unbind('notes');
    },
    componentWillUnMount: function(){
        this.unbindNotes();
    },
    init: function(username){
        var childRef = this.ref.child(username)
        this.bindAsArray(childRef, 'notes');
        getGithubInfo(username)
            .then(function(data){
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this))
    },
    componentWillReceiveProps: function(nextProps){
        var username = nextProps.params.username;
        this.unbindNotes();
        this.init(username);
    },
    handleAddNote: function(newNote){
        var username = this.props.params.username;
        this.ref.child(username).child(this.state.notes.length).set(newNote);
    },
    render: function(){
        return (
          <div className="row">
                <div className="col-md-4">
                    <UserProfile
                        username={this.props.params.username}
                        bio={this.state.bio}
                    />
                </div>
                <div className="col-md-4">
                    <Repos
                        username={this.props.params.username}
                        repos={this.state.repos}
                    />
                </div>
                <div className="col-md-4">
                    <Notes
                        username={this.props.params.username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote}
                    />
                </div>
            </div>
        );
    }
});

export default Profile;