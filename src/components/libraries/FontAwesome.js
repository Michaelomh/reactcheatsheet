import React from 'react';
import {Row, Col} from 'react-bootstrap';

class FontAwesome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'value'
        };
    }

    render() {
        return (
            <div className="fontawesome">
                <Row>
                    <Col sm={6}>
                        <h3>NPM Installation and Configuration</h3>
                        <pre><code>
            <p>{`npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/pro-solid-svg-icons
npm i --save @fortawesome/pro-regular-svg-icons
npm i --save @fortawesome/pro-light-svg-icons

npm install --save @fortawesome/fontawesome-pro
npm install --save @fortawesome/fontawesome-free

npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" 49CE7988-F020-48B8-8494-6888E8A4DB54
 `}</p>
            </code></pre>
                     </Col>
                    <Col sm={6}>
                        <h3>React Installation - Libraries</h3>
                        <pre><code>
            <p>{`//In the App.js add the following:
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';

library.add(fab, fas, far, fal)
            `}</p>
            </code></pre>
            <ul>
                            <li>
                                <a href="https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers">
                                    FontAwesome React additional Configuration
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/FortAwesome/react-fontawesome">React-fontawesome github page</a>
                            </li>
                            <li>
                                <a href="https://fontawesome.com/icons?d=gallery">Font Awesome Icons</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Basic Usage for Font Awesome</h3>
                        <pre><code>
            <p>{`//Basic Usage
<FontAwesomeIcon icon={['fab', 'apple']} />

//Size
<FontAwesomeIcon icon={['fab', 'apple']} size="xs" />
<FontAwesomeIcon icon={['fab', 'apple']} size="sm" />
<FontAwesomeIcon icon={['fab', 'apple']} size="md" />
<FontAwesomeIcon icon={['fab', 'apple']} size="lg" />
<FontAwesomeIcon icon={['fab', 'apple']} size="2x" />
<FontAwesomeIcon icon={['fab', 'apple']} size="5x" />
<FontAwesomeIcon icon={['fab', 'apple']} size="7x" />
<FontAwesomeIcon icon={['fab', 'apple']} size="10x" />

//Rotation
<FontAwesomeIcon icon={['fab', 'apple']} rotation={90} />
<FontAwesomeIcon icon={['fab', 'apple']} rotation={180} />
<FontAwesomeIcon icon={['fab', 'apple']} rotation={270} />

//Spin or Pulsing
<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />

//Pull-left/Right
<FontAwesomeIcon icon="spinner" pull="left" />
<FontAwesomeIcon icon="spinner" pull="right" />

//Transform
<FontAwesomeIcon icon="spinner" transform="shrink-6 left-4" />
<FontAwesomeIcon icon="spinner" transform={{ rotate: 42 }} />

//Masking
<span className="fa-layers fa-fw">
  <FontAwesomeIcon icon="square" color="green" />
  <FontAwesomeIcon icon="check" inverse transform="shrink-6" />
</span>

<span className="fa-layers fa-fw">
    <FontAwesomeIcon icon={['fas', 'bookmark']} style={{color: 'blue'}}/>
    <FontAwesomeIcon icon={['fas', 'heart']} inverse transform="shrink-10 up-2" />
</span>`}</p>
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

export default FontAwesome;
