import React, { Component } from 'react';

class Task3_2 extends Component {
  showMessage() {
    alert('Hello!');
  }

  render() {
    return (
      <button className="myButton" onClick={this.showMessage}>
        Click me
      </button>
    );
  }
}

export default Task3_2;
