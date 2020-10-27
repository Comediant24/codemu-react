import React, { useState } from 'react';

const Task6_1 = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input onChange={handleInputChange}></input>
    </div>
  );
};

export default Task6_1;
