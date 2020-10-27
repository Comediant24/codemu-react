import React, { useState } from 'react';

const Task6_6 = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [paragraphText, setParagraphText] = useState('');

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    e.target.name === '1' ? setValue1(value) : setValue2(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphText(value1 + value2);
    setValue1('');
    setValue2('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="1"
          type="number"
          value={value1}
          onChange={handleInputChange}
        />
        <br></br>
        <input
          name="2"
          type="number"
          value={value2}
          onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">Сумма</button>
      </form>
      <p>{paragraphText}</p>
    </div>
  );
};

export default Task6_6;
