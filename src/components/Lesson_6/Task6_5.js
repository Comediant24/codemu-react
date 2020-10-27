import React, { useState } from 'react';

const Task6_5 = () => {
  const [value, setValue] = useState('');
  const [paragraphText, setParagraphText] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphText(value);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button type="submit">Вставить</button>
      </form>
      <p>{paragraphText}</p>
    </div>
  );
};

export default Task6_5;
