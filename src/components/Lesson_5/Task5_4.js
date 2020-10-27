import React, { useState } from 'react';

const Task5_4 = () => {
  const [names, setNames] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);

  return (
    <div>
      <ul>
        {names.map((name, index) => {
          return (
            <li key={index}>
              {name}

              <button
                onClick={() => {
                  const dudes = names.map((el) => el);
                  dudes.splice(index, 1);
                  setNames(dudes);
                }}
              >
                Удалить пункт
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Task5_4;
