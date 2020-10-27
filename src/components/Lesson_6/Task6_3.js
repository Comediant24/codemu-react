import React, { useState } from 'react';

const Task6_3 = () => {
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p>Введите ваш возраст:</p>
      <input type="number" value={value} onChange={handleInputChange} />
      <p>Год рождения: {value ? 2020 - value : ''}</p>
    </div>
  );
};

export default Task6_3;
