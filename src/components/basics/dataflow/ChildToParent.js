import React from 'react';
import {Col} from "react-bootstrap";

class childToParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0,
        };

        this.clicky = this.clicky.bind(this);
    }


    render() {
        return (
            <div onClick={this.clicky}>
                <Col sm={12}>
                    <h3>Example of Dataflow from Parent to Child Code</h3>
                    <pre><code>
            <p>{`const Welcome = (props) => {
    return(
        <div>
            <ChildComponent a={3} b={'Hello'} />
        </div>
    )
}
`}</p>
            </code></pre>
                </Col>
                <p>In this example, the Parent Component creates a child component, and passes 2 variables - a and b with values 3 and 'Hello' respectively.<br/>
                    This is how you pass data from parent to child component, via props.</p>
            </div>
        );
    }
}

export default childToParent;
