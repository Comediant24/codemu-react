/*
Дан селект со списком городов (просто селект в HTML коде, option не из массива).
Дан также абзац, в который выводится выбранный город.Сделайте так, чтобы при смене города в селекте в абзаце он также менялся.
*/

import React, { useState } from 'react';

const Task7_4 = () => {
  const [select, setSelect] = useState('Красноярск');

  const handlechange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <select value={select} onChange={handlechange}>
        <option value="Красноярск">Красноярск</option>
        <option value="Новосибирск">Новосибирск</option>
        <option value="Екатеринбург">Екатеринбург</option>
      </select>
      <p>{select}</p>
    </div>
  );
};

export default Task7_4;
