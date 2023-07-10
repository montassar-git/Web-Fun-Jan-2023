import React, { Component } from 'react';
// Add a semicolon at the end of the import statement

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    };
  }

  changeAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.props.firstName}, {this.props.lastName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <p>
          <button onClick={this.changeAge}>
            Birthday button for {this.props.firstName} {this.props.lastName}
          </button>
        </p>
      </div>
    );
  }
}

export default PersonCard;
