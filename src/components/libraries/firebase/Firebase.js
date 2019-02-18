import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Firebase extends React.Component {
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
          <Col sm={12}><h3>Configuration &amp; Setup</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
        </Row>
        <Row>
          <Col sm={12}><h3>Read</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
        </Row>
        <Row>
          <Col sm={12}><h3>Update</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
        </Row>
        <Row>
          <Col sm={12}><h3>Delete</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
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

export default Firebase;
