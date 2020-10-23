import React, { useState } from 'react';

const Task4_5 = () => {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя']);

  return (
    <div>
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task4_5;
