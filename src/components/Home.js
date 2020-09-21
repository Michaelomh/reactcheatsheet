import React from 'react';
import {Col, Row} from 'react-bootstrap'
import Homepanel from './Homepanel'
import {AddressBook, Clone} from '@styled-icons/fa-regular'
import {BreadSlice, Vial, Fire, Plug} from '@styled-icons/fa-solid'
import {Bootstrap, FontAwesome} from '@styled-icons/fa-brands'
import {Table, ListNested} from '@styled-icons/bootstrap'
import {BookBookmark} from '@styled-icons/boxicons-solid/BookBookmark'
import {Paintbrush} from '@styled-icons/octicons/Paintbrush'
import {ActionRedo} from '@styled-icons/open-iconic/ActionRedo';

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
                            category="orange-bg-1">
                            <AddressBook size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="States"
                            link="/states"
                            category="orange-bg-1">
                            <Clone size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Events"
                            link="/events"
                            category="orange-bg-1">
                            <ActionRedo size="32"/>
                        </Homepanel>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Homepanel
                            title="Adv. Guide"
                            link="/advanceGuide"
                            category="orange-bg-2">
                            <BookBookmark size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Mapping"
                            link="/mapping"
                            category="orange-bg-2">
                            <Table size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Render"
                            link="/render"
                            category="orange-bg-2">
                            <Paintbrush size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Composition"
                            link="/composition"
                            category="orange-bg-2">
                            <ListNested size="32"/>
                        </Homepanel>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Homepanel
                            title="FontAwesome"
                            link="/fontawesome"
                            category="orange-bg-3">
                            <FontAwesome size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Firebase"
                            link="/firebase"
                            category="orange-bg-3">
                            <Fire size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Bootstrap"
                            link="/bootstrap"
                            category="orange-bg-3">
                            <Bootstrap size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Axios"
                            link="/axios"
                            category="orange-bg-3">
                            <Plug size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Testing"
                            link="/testing"
                            category="orange-bg-3">
                            <Vial size="32"/>
                        </Homepanel>
                    </Col>
                    <Col sm={3}>
                        <Homepanel
                            title="Toastr"
                            link="/toastr"
                            category="orange-bg-3">
                            <BreadSlice size="32"/>
                        </Homepanel>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;