import React from 'react';
import {Row, Col} from 'react-bootstrap';

class AdvanceGuide extends React.Component {
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
                    <h3 style={{width: '100%'}}>Advanced Guide</h3>
                    <p>This guide follows important concepts that you can learn from the offical react docs.</p>
                    <Col sm={12}>
                        <h3>Code Splitting</h3>
                        <p>Code-splitting your app can help you “lazy-load” just the things that are
                            currently needed by the user, which can dramatically improve the performance of
                            your app. While you haven’t reduced the overall amount of code in your app,
                            you’ve avoided loading code that the user may never need, and reduced the amount
                            of code needed during the initial load.<br/><br/>

                            To avoid winding up with a large bundle, it’s good to get ahead of the problem
                            and start “splitting” your bundle.</p>
                        <b>Dynamic Import</b>
                        <p>You can use dynamic import as a way to code split. So instead of using
                             <code> import</code>, you are doing this.</p>
                        <pre><code>
            <p>{`//normal import
import { add } from './math';
console.log(add(16, 26));

//Dynamic Import
import("./math").then(math => {
  console.log(math.add(16, 26));
});`}</p>
            </code></pre>
                    </Col>
                    <Col sm={6}>
                        <h3>2 Column</h3>
                        <pre><code>
            <p>{``}</p>
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

export default AdvanceGuide;
