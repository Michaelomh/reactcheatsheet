import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, img} from 'react-bootstrap'

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand
                        style={{
                        width: '180px'
                    }}>
                        <img
                            src={require('../../../img/avatar.png')}
                            className="img-fluid"
                            alt="Datayse Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="mr-auto"
                            style={{
                            marginTop: '20px'
                        }}>
                            <Link to='/' className="nav-link">Home</Link>

                            <NavDropdown title="Main Concepts" id="basic-nav-dropdown">
                                <Link to='/classes'>Classes</Link><br/>
                                <Link to='/states'>State + Props</Link><br/>
                                <Link to='/events'>Events</Link><br/>
                            </NavDropdown>

                            <NavDropdown title="Advance Guide" id="basic-nav-dropdown">
                                <Link to='/advanceGuide'>Advanced Guide</Link><br/>
                                <Link to='/mapping'>Mapping</Link><br/>
                                <Link to='/render'>Render</Link><br/>
                                <Link to='/composition'>Composition</Link><br/>
                            </NavDropdown>

                            <NavDropdown title="Libraries" id="basic-nav-dropdown">
                                <Link to='/fontawesome'>FontAwesome</Link><br/>
                                <Link to='/axios'>Axios</Link><br/>
                                <Link to='/cookies'>Cookies</Link><br/>
                                <Link to='/testing'>Testing</Link><br/>
                                <Link to='/toastr'>Toastr</Link><br/>
                                <Link to='/finalform'>Final Form</Link><br/>
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
