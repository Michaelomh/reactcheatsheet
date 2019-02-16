import React from 'react';

class Welcome extends React.Component {
  render() {
    const Hello = (props) => {
        return <p>Hello you! {props.name}</p>
    }

    return (
      <div>
        <Hello name="Michael"/>
      </div>
    )
  }
}

export default Welcome;