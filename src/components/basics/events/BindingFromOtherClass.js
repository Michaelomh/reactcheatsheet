import React from 'react';

class BindingFromOtherClass extends React.Component {
    render() {
        return (
          <div>
            <button onClick={this.props.alert} >
              Alert Clicked!
            </button>
          </div>
        );
    }
}

export default BindingFromOtherClass;
