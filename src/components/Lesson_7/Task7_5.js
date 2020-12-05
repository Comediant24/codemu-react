// Модифицируйте предыдущую задачу так, чтобы список городов хранился в массиве из стейта.

import React, { useState } from 'react';

const Task7_5 = () => {
  const [select, setSelect] = useState('Красноярск');
  const cities = ['Красноярск', 'Новосибирск', 'Екатеринбург'];

  const handlechange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <select value={select} onChange={handlechange}>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p>{select}</p>
    </div>
  );
};

export default Task7_5;
