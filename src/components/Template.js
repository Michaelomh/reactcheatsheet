import React from 'react';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'value'
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col><h3>1 Column</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
        </Row>
        <Row>
          <Col><h3>2 Column</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
          <Col><h3>2 Column</h3>
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
