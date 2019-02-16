import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';

const Homepanel = (props) => {
    return (
        <Link to={props.link}>
            <div className={`home-panel ${props.category}`}>
                <FontAwesomeIcon icon={[props.iconType, props.icon]} size="2x" pull="left"/>
                <span>{props.title}</span><br/>

            </div>
        </Link>
    )
}

export default Homepanel;