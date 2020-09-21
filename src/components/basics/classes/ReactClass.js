import React from 'react';
import {Row, Col} from 'react-bootstrap';

class ReactClass extends React.Component {
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
                    <Col sm={6}>
                        <h3>React Class Components</h3>
                        <pre><code>
            {`import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'Michael'
    };
  }

  render() {
    return (
      <div>
        Hello {this.state.key}
      </div>
    )
  }
}

export default Welcome;`}
            </code></pre>
                    </Col>
                    <Col sm={6}>
                        <h3>React Functional Components</h3>
          <p>There are 2 ways to build a functional component and both are very similar in terms of functionality.</p>
                        <pre><code>
              <p>{`import React from 'react';

const Welcome = (props) => {
    return(
        <div>Hello {props.name}</div>
    )
}

function Welcome2(props) {
    return <div>Hello {props.name}</div>;
}

export default Welcome;
export default Welcome2;`}</p>
            </code></pre>
            <p>
                      *Props cannot be changed, as such functions inside functions cannot be updated.<br />
                      *Functional Components cannot have states
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h3>Creating a Functional Component in a Class Component</h3>
                        <pre><code>
              <p>{`import React from 'react';

class Welcome extends React.Component {
  render() {
    const Hello = (props) => {
        return <p>Hello you! {props.name}</p>
    }

    return (
      <div>
        <Hello name="Michael"/>
      </div>
    )
  }
}

export default Welcome;`}</p>
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

export default ReactClass;
