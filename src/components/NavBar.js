import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <h1>Michael's React Experiment </h1>
          <Link to='/'>Home</Link>
          <span>  |  </span>
          <Link to='/authorQuiz'>AuthorQuiz</Link>
          <span>  |  </span>
          <Link to='/counter'>Counter</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
