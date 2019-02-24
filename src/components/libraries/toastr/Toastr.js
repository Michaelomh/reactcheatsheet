import React from 'react';
import {Row, Col, ButtonToolbar, Button, Table} from 'react-bootstrap';
import {toast} from 'react-toastify';

class Toastr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };
    }

    notify = () => {
        toast("Wow so easy !");
    }

    render() {
        return (
            <div className="template">
                <Row>
                    <Col sm={12}>
                        <h3>Installation &amp; Configuration</h3>
                        <a href="https://github.com/fkhadra/react-toastify">Github page</a><br/>
                        <a href="https://fkhadra.github.io/react-toastify/">Toastr Demo page</a>
                        <pre><code>
            <p>{`//Installation
$ npm install --save react-toastify

//Configuration - usually everything is done in EITHER the app.js / index.js
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//if you want to create in app.js
render(){
  return (
    <div>
      <div>
        Usually go here
      </div>
      <ToastContainer />
    </div>
  );
}
  
//if you want to create in index.js
ReactDOM.render((
  <div>
  <ToastContainer
    newestOnTop={false}
    rtl={false}
    draggable
    pauseOnHover
    pauseOnVisibilityChange={false}
    closeOnClick
  />
  </div>
), document.getElementById('toastr'));`}</p>
            </code></pre>
                    </Col>
                    <Col sm={12}>
                        <h3>Toastr Emitter</h3>
                        Toastr Emitter is the method that you call in order for the toastr to appear in
                        the Application
                        <pre><code>
            <p>{`//Before you are able to use toastr, you need to import
import { toast } from 'react-toastify';

//Put this code inside a method, and it will appear
toast("Default Notification !");

//the emitter can be customized and not take in what the toastrContainer provide
toast('Customized Toastr Emitter!', {
  position: "top-right"
  autoClose: 5000
  hideProgressBar: false
  closeOnClick: true
  pauseOnHover: true
  draggable: true
});`}</p>
        </code></pre>
                    </Col>
                    <Col sm={10}>
                        <h3>Toastr Styling</h3>
                        <pre><code>
                        <p>{`//Toastr Types
toast('Default Styles')
toast.success('Sucesss Styles')
toast.error('Error Styles')
toast.info('Info Styles')
toast.warn('Warning Styles')`}</p>
                        </code></pre>
                    </Col>
                    <Col sm={2}>
                        <h3>&nbsp;</h3>
                        <ButtonToolbar className="toastrButtons">
                            <Button block variant="primary" onClick={() => toast('Default Styles')}>Default Toastr</Button >
                            <Button block variant="success" onClick={() => toast.success('Sucesss Styles')}>Sucesss Toastr</Button >
                            <Button block variant="danger" onClick={() => toast.error('Error Styles')}>Error Toastr</Button >
                            <Button block variant="info" onClick={() => toast.info('Info Styles')}>Info Toastr</Button >
                            <Button block variant="warning" onClick={() => toast.warn('Warning Styles')}>Warning Toastr</Button >
                        </ButtonToolbar>
                    </Col>
                    <Col sm={12}>
                    <Table striped bordered size="sm" responsive className="toastrTable">
                        <thead>
                            <tr>
                                <th>Props</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>top-right</td>
                                <td>One of top-right, top-center, top-left, bottom-right, bottom-center, bottom-left</td>
                            </tr>
                            <tr>
                                <td>autoClose</td>
                                <td>false or number</td>
                                <td>5000</td>
                                <td>Delay in ms to close the toast. If set to false, the notification need to be
                                    closed manualy</td>
                            </tr>
                            <tr>
                                <td>closeButton</td>
                                <td>React Element or false</td>
                                <td>-</td>
                                <td>A React Component to replace the default close button or false to hide the button</td>
                            </tr>
                            <tr>
                                <td>transition</td>
                                <td>function</td>
                                <td>-</td>
                                <td>A reference to a valid react-transition-group/Transition component</td>
                            </tr>
                            <tr>
                                <td>hideProgressBar</td>
                                <td>bool</td>
                                <td>false</td>
                                <td>Display or not the progress bar below the toast(remaining time)</td>
                            </tr>
                            <tr>
                                <td>pauseOnHover</td>
                                <td>bool</td>
                                <td>true</td>
                                <td>Keep the timer running or not on hover</td>
                            </tr>
                            <tr>
                                <td>pauseOnFocusLoss</td>
                                <td>bool</td>
                                <td>true</td>
                                <td>Pause the timer when the window loses focus</td>
                            </tr>
                            <tr>
                                <td>rtl</td>
                                <td>bool</td>
                                <td>false</td>
                                <td>Support right to left content</td>
                            </tr>
                            <tr>
                                <td>closeOnClick</td>
                                <td>bool</td>
                                <td>true</td>
                                <td>Dismiss toast on click</td>
                            </tr>
                            <tr>
                                <td>newestOnTop</td>
                                <td>bool</td>
                                <td>false</td>
                                <td>Display newest toast on top</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string|object</td>
                                <td>-</td>
                                <td>Add optional classes to the container</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>-</td>
                                <td>Add optional inline style to the container</td>
                            </tr>
                            <tr>
                                <td>toastClassName</td>
                                <td>string|object</td>
                                <td>-</td>
                                <td>Add optional classes to the toast</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                </Row>

                <h3>Notes</h3>
                <pre><code>
              <p>{`
              
              `}</p>
            </code></pre>
            </div>
        );
    }
}

export default Toastr;
