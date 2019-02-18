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
import States from './basics/state/States';
import BindingExample from './basics/events/BindingExample';
import Events from './basics/events/Events';
import Mapping from './advanced/mapping/Mapping';
import Composition from './advanced/composition/Composition';
import FontAwesome from './libraries/FontAwesome';
import Firebase from './libraries/firebase/Firebase';

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
                        <Route exact path='/states' component={States} />
                        <Route exact path='/events' component={Events} />
                        <Route exact path='/events-binding' component={BindingExample} />
                        <Route exact path='/firebase' component={Firebase} />
                        <Route exact path='/api' />
                        <Route exact path='/mapping' component={Mapping} />
                        <Route exact path='/composition' component={Composition} />
                        <Route exact path='/axios' />
                        <Route exact path='/cookies' />
                        <Route exact path='/testing' />
                        <Route exact path='/render' />
                        <Route exact path='/fontawesome' component={FontAwesome} />
                        <Route exact path='/finalform' />
                        <Route exact path='/toastr' />
                        <Route exact path='/bootstrap' />
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;
