/*
Дан селект со списком CSS цветов. Дан абзац.
Сделайте так, чтобы при смене цвета абзац красился в выбранный цвет.
*/

import React, { useEffect, useState } from 'react';

const Task7_9 = () => {
  const CHECK_IT = [
    { value: 'check', text: 'Отмечено' },
    { value: 'uncheck', text: 'Не отмечено' },
  ];

  const [select, setSelect] = useState(CHECK_IT[0].value);
  const [checkbox, setCheckbox] = useState(false);

  useEffect(() => {
    select === 'check' ? setCheckbox(true) : setCheckbox(false);
  }, []);

  const handleChangeSelect = (e) => {
    const value = e.target.value;
    setSelect(value);
    value === 'check' ? setCheckbox(true) : setCheckbox(false);
  };

  const handleChangeValue = (e) => {
    const value = e.target.checked;
    value ? setSelect('check') : setSelect('uncheck');
    setCheckbox(!checkbox);
  };

  return (
    <div>
      <select value={select} onChange={handleChangeSelect}>
        {CHECK_IT.map((check, index) => (
          <option key={index} value={check.value}>
            {check.text}
          </option>
        ))}
      </select>
      <input type="checkbox" checked={checkbox} onChange={handleChangeValue} />
    </div>
  );
};

export default Task7_9;
