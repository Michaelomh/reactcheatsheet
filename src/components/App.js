import React from 'react';

import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';

//Class imports
import NavBar from './basics/routing/NavBar';
import Home from './Home';
import ReactClass from './basics/classes/ReactClass';
import FontAwesome from './libraries/FontAwesome';

library.add(fab, fas, far, fal)

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Container>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/classes' component={ReactClass} />
                        <Route exact path='/binding'  />
                        <Route exact path='/forms' />
                        <Route exact path='/firebase' />
                        <Route exact path='/api' />
                        <Route exact path='/mapping'  />
                        <Route exact path='/axios' />
                        <Route exact path='/cookies' />
                        <Route exact path='/testing'  />
                        <Route exact path='/fontawesome' component={FontAwesome} />
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;
