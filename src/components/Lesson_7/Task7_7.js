/*
Дан текстареа и кнопка. Дан также стейт texts с массивом текстов.
Изначально этот массив пустой, но каждый раз по нажатию на кнопку
в конец этого массива должно записаться текущее содержимое текстареа.
Выведите содержимое массива this.state.texts так, чтобы каждый элемент
массива выводился в новом абзаце.
*/

import React, { useState } from 'react';

const Task7_7 = () => {
  const [value, setValue] = useState('');
  const [texts, setTexts] = useState([]);

  const handlechange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    setTexts([...texts, value]);
    setValue('');
  };

  return (
    <div>
      <div>
        <textarea value={value} onChange={handlechange} />
      </div>
      <button onClick={handleClick}>Click me</button>
      <div>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Task7_7;
