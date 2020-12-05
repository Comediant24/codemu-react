/*
Дан инпут, кнопка и селект.
Сделайте следующее: в инпут вводится какая-то строка и по нажатию
на кнопку эта строка должна добавится в конец селекта в виде нового option.
*/

import React, { useState } from 'react';

const Task7_11 = () => {
  const [valuesSelect, setValuesSelect] = useState([
    'инпут',
    'кнопка',
    'селект',
  ]);
  const [valueInput, setValueInput] = useState('');
  const [currentSelect, setCurrentSelect] = useState(valuesSelect[0]);

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleClick = () => {
    if (/^\s*$/.test(valueInput)) return;
    setValuesSelect([...valuesSelect, valueInput]);
    setValueInput('');
  };

  const handleChangeSelect = (e) => {
    setCurrentSelect(e.target.value);
  };

  return (
    <div
      style={{
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        gap: '20px',
      }}
    >
      <input value={valueInput} onChange={handleChange} />

      <button onClick={handleClick}>Просто добавь</button>

      <select value={currentSelect} onChange={handleChangeSelect}>
        {valuesSelect.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Task7_11;
