import React from 'react';

const Task2_9 = () => {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  return (
    <ul>
      {arr.map((char, index) => (
        <li key={index}>{char}</li>
      ))}
    </ul>
  );
};

export default Task2_9;
