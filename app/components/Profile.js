var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

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
        var username = this.props.params.username;
        this.ref = new Firebase('https://gg-github-notes.firebaseio.com/');
        var childRef = this.ref.child(username)
        this.bindAsArray(childRef, 'notes');
        helpers.getGithubInfo(this.props.params.username)
            .then(function(data){
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this))
    },
    componentWillUnMount: function(){
        this.unbind('notes');
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

module.exports = Profile;