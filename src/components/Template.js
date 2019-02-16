import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Template extends React.Component {
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
          <Col sm={12}><h3>1 Column</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
        </Row>
        <Row>
          <Col sm={6}><h3>2 Column</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
          <Col sm={6}><h3>2 Column</h3>
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

export default Template;
