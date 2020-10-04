import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Dataflow extends React.Component {
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
          <Col sm={12}><h3>Dataflow</h3>
            <p>In react, data should only move downwards. This means that data should only move from parent component to child component.<br />
            This is usually done using props. By using props, data can flow from parent to child components.<br /><br />
            However, if you need to move data from child component to parent component, it can be done by functions.<br />
            First, you need to create a function at the top level parent. From there, you send the function all the way down until the child component where the function is executed. <br />
            The result would then be passed upwards to the parent via the function arguments.</p>
          </Col>
          <Col sm={12}><h3>Example of function move from parent to child and data from child to parent</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre>
          </Col>
          <Col sm={12}>
            <h3>Examples</h3>
            <Link to='/parentToChild'>
              <button>Parent to Child Dataflow</button>
            </Link>
            <Link to='/childToParent'>
              <button>Child to Parent Dataflow</button>
            </Link>
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

export default Dataflow;
