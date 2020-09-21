import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

import {Container} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
//Class imports
import NavBar from './NavBar';
import Home from './Home';
import ReactClass from './basics/classes/ReactClass';
import States from './basics/state/States';
import BindingExample from './basics/events/BindingExample';
import Events from './basics/events/Events';
import Mapping from './advanced/mapping/Mapping';
import Composition from './advanced/composition/Composition';
import FontAwesome from './libraries/FontAwesome';
import Firebase from './libraries/firebase/Firebase';
import Toastr from './libraries/toastr/Toastr';
import AdvanceGuide from './advanced/advanceGuide/AdvanceGuide';
import Bootstrap from './libraries/reactBootstrap/ReactBootstrap';

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
                        <Route exact path='/advanceGuide' component={AdvanceGuide} />
                        <Route exact path='/mapping' component={Mapping} />
                        <Route exact path='/composition' component={Composition} />
                        <Route exact path='/axios' />
                        <Route exact path='/cookies' />
                        <Route exact path='/testing' />
                        <Route exact path='/fontawesome' component={FontAwesome} />
                        <Route exact path='/finalform' />
                        <Route exact path='/toastr' component={Toastr} />
                        <Route exact path='/bootstrap' component={Bootstrap} />
                    </Switch>
                </Container>
                <ToastContainer />
            </div>
        );
    }
}

export default App;
