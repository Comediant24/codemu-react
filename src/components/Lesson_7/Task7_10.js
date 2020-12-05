/*
Дан селект со списком CSS цветов. Дан абзац.
Сделайте так, чтобы при смене цвета абзац красился в выбранный цвет.
*/

import React, { useState } from 'react';

const Task7_10 = () => {
  const TEXTS = [
    { value: '1-text', text: 'Дан селект и 3 абзаца' },
    { value: '2-text', text: 'В селекте можно выбрать один' },
    { value: '3-text', text: 'из трех пунктов' },
  ];

  const [select, setSelect] = useState(TEXTS[0].value);

  const handleChangeSelect = (e) => {
    const value = e.target.value;
    setSelect(value);
  };

  console.log(select === '1-text');
  return (
    <div>
      <select value={select} onChange={handleChangeSelect}>
        {TEXTS.map((text, index) => (
          <option key={index} value={text.value}>
            {text.text}
          </option>
        ))}
      </select>

      {TEXTS.map((text, index) => (
        <p key={index}>
          {`${index + 1} абзац: ${
            select === `${index + 1}-text` ? text.text : ''
          }`}
        </p>
      ))}
    </div>
  );
};

export default Task7_10;
