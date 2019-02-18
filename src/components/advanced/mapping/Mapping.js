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
          <Col sm={12}><h3>Rendering Mapping</h3>
            <pre><code>
            <p>{`{this.state.arrays.map((testcase) => {
    return (
      <div>
        Title: {testcase.name}<br />
        Description: {testcase.description} <br />
      </div>
    )
  })
}`}</p>
            </code></pre></Col>
        </Row>
        <Row>
          <Col sm={12}><h3>Mapping values</h3>
            <pre><code>
            <p>{`institutions.map(institution) => {
  institutionsNames.push({
    label: institution.name,
    value: institution.id
  })
}

this.setState({institutionNames: institutionsNames})`}</p>
            </code></pre></Col>
        </Row>
        <Row>
          <Col sm={12}><h3>Map Rendering Function Component</h3>
            <pre><code>
            <p>{`function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => 
    <li key={number.toString() + "-" + index}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);`}</p>
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
