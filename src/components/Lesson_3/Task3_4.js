import React, { Component } from 'react';

class Task3_4 extends Component {
  state = { name: 'Иван', age: 25 };

  changeUser() {
    this.setState = { name: 'Коля', age: 30 };
  }

  render() {
    const { name, age } = this.state;
    return (
      <div>
        <p>{`имя: ${name}, возраст: ${age}`}</p>
        <button className="myButton" onClick={this.changeUser}>
          Click me
        </button>
      </div>
    );
  }
}

export default Task3_4;
