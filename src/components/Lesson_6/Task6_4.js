import React, { useState } from 'react';

const Task6_4 = () => {
  const [value, setValue] = useState('');
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <p>Введите ФИО:</p>
      <input type="text" value={value} onChange={handleInputChange} />
      <p>Фамилия: {value.split(' ')[0]}</p>
      <p>Имя: {value.split(' ')[1]}</p>
      <p>Отчество: {value.split(' ')[2]}</p>
    </div>
  );
};

export default Task6_4;
