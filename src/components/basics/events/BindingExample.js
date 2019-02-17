import React from 'react';

class BindingExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOnOne: true,
            isToggleOnTwo: true,
            isToggleOnThree: true
        };

        //one = arrow function in render
        //two = binding in constructor
        //three = arrow function in function

        // This binding is necessary to make `this` work in the callback
        this.handleClickTwo = this.handleClickTwo.bind(this);
    }

    handleClickOne() {
        this.setState({isToggleOnOne: !this.state.isToggleOnOne});
    }

    handleClickTwo() {
        this.setState({isToggleOnTwo: !this.state.isToggleOnTwo});
    }

    handleClickThree = () => {
        this.setState({isToggleOnThree: !this.state.isToggleOnThree});
    }

    render() {
        return (
          <div>
            <button onClick={(e) => this.handleClickOne(e)}>
              {this.state.isToggleOnOne ? 'Arrow Function in Render' : 'OFF'}
            </button> 

            <button onClick = {this.handleClickTwo} > 
              {this.state.isToggleOnTwo ? 'Binding in Constructor' : 'OFF'}
            </button>

            <button onClick={this.handleClickThree}>
              {this.state.isToggleOnThree ? 'Arrow Function in Method' : 'OFF'}
            </button >
          </div>);
    }
}

export default BindingExample;
