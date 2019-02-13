import React, { Component } from 'react';
import '../styles/App.css';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
<Container>
            <Switch>
              <Route exact path='/'/>
              <Route path='/authorQuiz' />
              <Route path='/counter' />
            </Switch>
            </Container>
      </div>
    );
  }
}

export default App;
