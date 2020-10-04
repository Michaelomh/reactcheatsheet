import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sum from "./Sum";

class Props extends React.Component {
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
          <Col sm={12}><h3>Props</h3>
            <p>Props are static, user definied variables in the React Component</p>
            <pre><code>
            <p>{`//Assuming the below react component
<Sum a={4} b={new Date().toISOString()}/>

// With Sum Component as follows
<div><p>Hello, agent no. {props.a}. The time now is {props.b}.</p></div>`}</p>
            </code></pre>
          </Col>
        </Row>
        <Sum a={4} b={new Date().toISOString()}/>
        <p>Notice how the time does not change? This is because props are static.</p>
          <h3>Notes</h3>
          <pre><code>
              <p>{`
              
              `}</p>
            </code></pre>
      </div>
    );
  }
}

export default Props;
