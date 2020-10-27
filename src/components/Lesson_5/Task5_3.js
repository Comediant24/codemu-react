import React, { useState } from 'react';

const Task5_3 = () => {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);

  const handleClick = () => {
    setNames(names.slice(0, -1));
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <button onClick={handleClick}>Удалить пункт</button>
    </div>
  );
};

export default Task5_3;
