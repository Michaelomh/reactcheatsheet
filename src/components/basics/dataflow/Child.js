import React from 'react';
import {Col} from "react-bootstrap";

class child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0,
        };

        this.clicky = this.clicky.bind(this);
    }


    render() {
        return (
            <div>
                <div className="option" onClick={() => props.getChoice("Option1")} >Option 1</div>
                    <div className="option" onClick={() => props.getChoice(optionName)} >Option 2</div>
                        <div className="option" onClick={() => props.getChoice(optionName)} >Option 3</div>
            </div>
        );
    }
}

export default child;
