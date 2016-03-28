var React = require('react');

var Main = React.createClass({
   render: function(){
       return (
           <div className="main-container">
               <nav className="navbar navbar-default" role="navigation">
                    <div className="cols-sm-7-offset-2" style={{marginTop: 15}}>
                        MENU
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
               </div>
           </div>

       );
   }
});

module.exports = Main;

