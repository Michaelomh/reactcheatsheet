import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };
    }

    render() {
        return (
            <div className="state">
                <Row>
                    <Col sm={6}>
                        <h3>Setting states</h3>
                        <pre><code>
            <p>{`//Normal setting of states
this.setState({comment: 'Hello'});

//If setting of state requires props
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));`}</p>
            </code></pre>
                    </Col>
                    <Col sm={6}>
                        <h3>State notes</h3>
                        <ul>
                            <li>This is why state is often called local or encapsulated. It is not
                                accessible to any component other than the one that owns and sets it.</li>
                            <li>After a value of setState is changed, it will re render the whole component
                                which uses that state.</li>
                        </ul>
                    </Col>
                    <Col sm={12}>
                        <h3>Examples</h3>
                        <Link to='/clickCounter'>
                            <button>Click Counter</button>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default States;
