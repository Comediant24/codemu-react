import React, { useState } from 'react';

const Task4_6 = () => {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя']);

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li>{`${name} - ${index + 1}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task4_6;
