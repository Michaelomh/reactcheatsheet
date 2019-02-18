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
                    <Col sm={4}>
                        <h4>BINDING IN CONSTRUCTOR</h4>
                        <pre><code>
            <p>{`constructor(props) {
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
  )}`}</p>
            </code></pre>
                    </Col>
                    <Col sm={4}>
                        <h4>ARROW FUNC IN METHOD</h4>
                        <pre><code>
<p>{`constructor(props) {
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
            </code></pre>
                    </Col>
                    <Col sm={4}>
                        <h4>ARROW FUNC IN RENDER</h4>
                        <pre><code>
<p>{`constructor(props) {
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

                    <h3>Moving events from one component to another</h3>
                    <p>*If you want to pass components from child to parent, it is possible. BUT IT
                        IS NOT THE REACT WAY. The react way is to do one way data. so from parent to
                        child, and values cannot move from child to parent</p>
                    <Col sm={6}>
                        <pre><code>
            <p>{`//Parent class
fromParentClass = () => {
  alert("From Parent Class!");
}

render() {
  return (
    //properly binded (arrow function in method)
    <ChildClass 
      function = {this.fromParentClass} />
  )
}`}</p>
            </code></pre>
                    </Col>
                    <Col sm={6}>
                        <pre><code>
            <p>{`//Child class
render() {
  return (
    <div>
      <button onClick={this.props.function}>
       Function called from parent class
      </button>
    </div>
  )
}`}</p>
            </code></pre>
                    </Col>
                </Row>
                <h3>Notes</h3>
                <ul>
                    <li>When you want to pass data from one class to another. Do note that react is
                        meant to do one way binding. Which means that data should only be passed from
                        the parent to the child component and not the other way round.
                    </li>
                    <li>It is advised to use either the binding in Constructor or the arrow function
                        binding in function method. There are still other ways to bind methods in React,
                        but there are the 3 most common ways to bind methods.</li>
                    <li>There should be a single “source of truth” for any data that changes in a
                        React application. Usually, the state is first added to the component that needs
                        it for rendering. Then, if other components also need it, you can lift it up to
                        their closest common ancestor. Instead of trying to sync the state between
                        different components, you should rely on the top-down data flow.</li>
                </ul>
            </div>
        );
    }
}

export default Events;
