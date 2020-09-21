import React from 'react';
import {Col, Row} from 'react-bootstrap';

class ReactBootstrap extends React.Component {
    render() {
        return (
            <div className="template">
                <Row>
                    <Col sm={12}>
                        <h3>Installation &amp; Configuration</h3>
                        <a href="https://react-bootstrap.github.io/getting-started/introduction/">React Bootstrap API</a><br/>
                        <a href="https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic?file=/src/index.js:87-164">React Boostrap CodePen</a>
                        <pre><code>
            <p>{`//Installation
$ npm install react-bootstrap bootstrap

//Configuration in Index.js
import 'bootstrap/dist/css/bootstrap.min.css';`}</p>
            </code></pre>
                    </Col>

                    <Col sm={12}>
                        <h3>Adding React Bootstrap components</h3>
                        <pre><code>
            <p>{`// You can add in React Bootstrap components after installation and configuration.
// This is done by importing directly to the react component.

e.g.
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

<Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
</Jumbotron>`}</p>
            </code></pre>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ReactBootstrap;
