import React from 'react';
import {Row, Col} from 'react-bootstrap'
import Homepanel from './Homepanel'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'Michael'
        };
    }

    render() {
        return (
            <div className="home">
                <Row>
                    <Col sm={3}>
                        <Homepanel
                            title="Classes"
                            link="/classes"
                            category="orange-bg-1"
                            icon="address-book"
                            iconType="far"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="States"
                            link="/states"
                            category="orange-bg-1"
                            icon="clone"
                            iconType="far"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Events"
                            link="/events"
                            category="orange-bg-1"
                            icon="link"
                            iconType="far"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Forms"
                            link="/forms"
                            category="orange-bg-1"
                            icon="pencil-alt"
                            iconType="fas"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Homepanel
                            title="APIs"
                            link="/api"
                            category="orange-bg-2"
                            icon="book"
                            iconType="far"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Mapping"
                            link="/mapping"
                            category="orange-bg-2"
                            icon="table"
                            iconType="fal"/>
                    </Col>
                    <Col sm={3}>
                    </Col>
                    <Col sm={3}>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Homepanel
                            title="FontAwesome"
                            link="/fontawesome"
                            category="orange-bg-3"
                            icon="fort-awesome-alt"
                            iconType="fab"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Firebase"
                            link="/firebase"
                            category="orange-bg-3"
                            icon="fire"
                            iconType="far"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Axios"
                            link="/axios"
                            category="orange-bg-3"
                            icon="plug"
                            iconType="far"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Cookies"
                            link="/cookies"
                            category="orange-bg-3"
                            icon="cookie-bite"
                            iconType="fas"/>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Testing"
                            link="/testing"
                            category="orange-bg-3"
                            icon="vial"
                            iconType="fas"/>
                    </Col>
                </Row>

                <Row>
                    
                    <Col sm={3}>
                    </Col>
                    <Col sm={3}>
                    </Col>
                    <Col sm={3}>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;