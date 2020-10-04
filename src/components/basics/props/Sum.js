import React from 'react';

function Sum(props) {
    return (
      <div className="Sum">
          <div><p>Hello, agent no. {props.a}. The time now is {props.b}.</p></div>
      </div>
    );
}

export default Sum;
