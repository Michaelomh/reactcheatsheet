import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };
    }

    render() {
        return (
            <div className="template">
                <Row>
                    <Col sm={12}>
                        <div>
                            <h3>When to use binding
                                <Link
                                    to='/events-binding'
                                    style={{
                                    float: 'right'
                                }}>
                                    <button>Binding in React</button>
                                </Link>
                            </h3>
                            <p>When using functions with event listeners, you need to bind the functions
                            because of.... There are 3 ways to bind functions together - 1. Binding in
                            Constructor (Most Preferred), 2. Arrow function in render, 3. Arrow function in
                            method.</p>

                        </div>
                        <pre><code>
            <p>{`//BINDING IN CONSTRUCTOR - MOST PREFERRED
constructor(props) {
  super(props);
  this.state = {
      isbinded: true,
  };
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState({isbinded: !this.state.isbinded});
}

render() {
  return (
    <button onClick={this.handleClick}>
      {this.state.isbinded ? 'Binded in Constructor' : 'OFF'}
    </button> 
  )
}`}</p>
<hr className="line-section" />
<p>{`//ARROW FUNCTION IN METHOD - 2ND BEST
constructor(props) {
  super(props);
  this.state = {
      isbinded: true,
  };
}

handleClick = () => {
  this.setState({isbinded: !this.state.isbinded});
}

render() {
  return (
    <button onClick={this.handleClick}>
      {this.state.isbinded ? 'Binded using arrow function in method' : 'OFF'}
    </button> 
  )
}`}</p>
<hr className="line-section"/>
<p>{`//ARROW FUNCTION IN RENDER
constructor(props) {
  super(props);
  this.state = {
      isbinded: true,
  };
}

handleClick() {
  this.setState({isbinded: !this.state.isbinded});
}

render() {
  return (
    <button onClick={(e) => this.handleClick(e)}>
      {this.state.isbinded ? 'Binded in Constructor' : 'OFF'}
    </button> 
  )
}`}</p>
            </code></pre>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h3>Moving events from one component to another</h3>
                        <pre><code>
            <p>{``}</p>
            </code></pre>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <h3>Creating an event properly</h3>
                        <pre><code>
            <p>{``}</p>
            </code></pre>
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

export default Events;
