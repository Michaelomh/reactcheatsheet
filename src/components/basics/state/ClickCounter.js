import React from 'react';
import {Col} from "react-bootstrap";

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0,
        };

        this.clicky = this.clicky.bind(this);
    }

    clicky() {
        this.setState({clickCounter: this.state.clickCounter + 1});
    }

    render() {
        return (
          <div onClick={this.clicky}>
              <Col sm={12}>
                  <h3>Click Counter Code</h3>
                  <pre><code>
            <p>{`constructor(props) {
    super(props);
    this.state = {
        clickCounter: 0,
    };
    this.clicky = this.clicky.bind(this);
}

clicky() {
   this.setState({clickCounter: this.state.clickCounter + 1});
}

render() {
   <div>
        Number of times this div is clicked: {this.state.clickCounter}
   </div>
}`}</p>
            </code></pre>
              </Col>
              <h3>Rendered Code:</h3>
            Number of times this div is clicked: {this.state.clickCounter}
          </div>
        );
    }
}

export default ClickCounter;
