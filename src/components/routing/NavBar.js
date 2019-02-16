import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, img  } from 'react-bootstrap'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand style={{width: '200px'}}>
                    <img 
                        src={require('../../img/avatar.png')} 
                        className="img-fluid"
                        alt="Datayse Logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Basics" id="basic-nav-dropdown">
                                    <Link to='/class'>Classes</Link><br />
                                    <Link to='/states'>State + Props</Link><br />
                                    <Link to='/forms'>Forms</Link><br />
                                    <Link to='/binding'>binding</Link><br />
                            </NavDropdown>

                            <NavDropdown title="Advanced" id="basic-nav-dropdown">
                                    <Link to='/api'>Libraries/Api</Link><br />
                                    <Link to='/mapping'>Mapping</Link><br />
                            </NavDropdown>

                            <NavDropdown title="Libraries" id="basic-nav-dropdown">
                                    <Link to='/firebase'>Firebase</Link><br />
                                    <Link to='/axios'>Axios</Link><br />
                                    <Link to='/cookies'>Cookies</Link><br />
                                    <Link to='/testing'>Testing</Link><br />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <hr style={{
                    margin: '5px'
                }}/>
            </div>
        );
    }
}

export default NavBar;
