import React from 'react';

class Repos extends React.Component {
   render(){
       const repos = this.props.repos;

       return (
           <div>
               <h2>User Repos</h2>
               <ul className="list-group">
                 {
                     repos.map( (repo, index) =>
                         <li className="list-group-item" key={index}>
                             { repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                             { repo.description && <p>{repo.description}</p> }
                         </li>
                     )
                 }
               </ul>
           </div>
       )
   }
};

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
}

export default Repos;
