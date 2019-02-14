import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to='/'>
                        <h1>REACT CHEAT SHEET</h1>
                    </Link>
                    <p className="navbar-links">
                      <Link to='/classes'>Classes</Link>
                      <Link to='/forms'>Forms</Link>
                      <Link to='/firebase'>Firebase</Link>
                      <Link to='/binding'>Binding</Link>
                      <Link to='/api'>Libraries/Api</Link>
                      <Link to='/mapping'>Mapping</Link>
                      <Link to='/axios'>Axios</Link>
                      <Link to='/cookies'>Cookies</Link>
                      <Link to='/testing'>Testing</Link>
                    </p>
                    <hr style={{margin: '5px'}}/>
                </div>
            </div>
        );
    }
}

export default NavBar;
