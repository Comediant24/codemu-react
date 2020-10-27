import React, { useState } from 'react';

const Task6_2 = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value.toUpperCase());
  };

  return (
    <div>
      <input value={value} onChange={handleInputChange} />
    </div>
  );
};

export default Task6_2;
