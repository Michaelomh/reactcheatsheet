import React from 'react';
import '../styles/App.css';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import NavBar from './routing/NavBar';
import ReactClass from './classes/ReactClass';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Container>
                    <Switch>
                        <Route exact path='/' />
                        <Route exact path='/class' component={ReactClass} />
                        <Route exact path='/binding'  />
                        <Route exact path='/forms' />
                        <Route exact path='/firebase' />
                        <Route exact path='/api' />
                        <Route exact path='/mapping'  />
                        <Route exact path='/axios' />
                        <Route exact path='/cookies' />
                        <Route exact path='/testing'  />
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;
