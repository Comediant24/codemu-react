/*
Дан селект со списком CSS цветов. Дан абзац.
Сделайте так, чтобы при смене цвета абзац красился в выбранный цвет.
*/

import React, { useState } from 'react';

const Task7_8 = () => {
  const COLORS = [
    { value: 'yellow', color: '#F1E05A' },
    { value: 'purple', color: '#563D7C' },
    { value: 'red', color: '#E34C26' },
  ];
  const [select, setSelect] = useState(COLORS[0].color);

  const handlechange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <select value={select} onChange={handlechange}>
        {COLORS.map((color, index) => (
          <option key={index} value={color.value}>
            {color.value}
          </option>
        ))}
      </select>
      <p style={{ color: select }} className="funny">
        JS строго типизированный язык
      </p>
    </div>
  );
};

export default Task7_8;
