import React from 'react';
import {Link} from 'react-router-dom';

const Homepanel = (props) => {
    return (
        <Link to={props.link}>
            <div className={`home-panel ${props.category}`}>
                <div className="home-panel-icon">
                    {props.children}
                </div>
                    <span className="home-panel-title">
                        {props.title}
                    </span>
            </div>
        </Link>
    )
}

export default Homepanel;