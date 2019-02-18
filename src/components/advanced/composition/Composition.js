import React from 'react';
import {Row, Col} from 'react-bootstrap';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };
    }

    render() {
        function Dialog(props) {
            return (
                <div color="blue">
                    <h1 className="Dialog-title">{props.title}</h1>
                    <p className="Dialog-message">{props.message}</p>
                    {props.children}
                </div>
            );
        }

        return (
            <div className="template">
                <Row>
                  <Col sm={12}>
                    <h3>Composition</h3>
                    <p>You can use "props.children" to pass the child elements directly into their
                        output.
                    </p>
                    </Col>
                    <Col sm={6}>
                      <pre><code>
            <p>{`function Dialog(props) {
  return (
    <div style={{border: {1px solid ${`props.color}`}}>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </div>
  );
}

class SignUpDialog extends React.Component {
  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
          <b>Sign Me Up! NOWWWWW</b>
      </Dialog>
    );
  }
}`}</p>
            </code></pre>
          </Col>
          <Col sm={6}>
          <h4>Results: </h4>
            <Dialog title="Mars Exploration Program"
                  message="How should we refer to you?">
              <b>Sign Me Up! NOWWWWW</b>
            </Dialog>
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

export default Template;