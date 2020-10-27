import React, { useState } from 'react';

const Task5_2 = () => {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);

  const handleClick = () => {
    setNames([...names, 'пункт']);
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <button onClick={handleClick}>Добавить пункт</button>
    </div>
  );
};

export default Task5_2;
