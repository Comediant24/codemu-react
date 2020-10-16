import React, { Component } from 'react';

class Task3_1 extends Component {
  state = { name: 'Иван', age: 25 };

  render() {
    const { name, age } = this.state;
    return <div>{`имя: ${name}, возраст: ${age}`}</div>;
  }
}

export default Task3_1;
