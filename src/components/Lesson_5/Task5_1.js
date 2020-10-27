import React, { useState } from 'react';

const Task5_1 = () => {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  return (
    <div>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Task5_1;
