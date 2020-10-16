import React, { Component } from 'react';

class Task3_3 extends Component {
  state = { name: 'Иван', age: 25 };

  showName() {
    alert(this.state.name);
  }

  render() {
    return (
      <button className="myButton" onClick={this.showName}>
        Click me
      </button>
    );
  }
}

export default Task3_3;
