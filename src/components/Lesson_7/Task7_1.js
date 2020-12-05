// Дан текстареа и абзац. Сделайте так, чтобы при наборе текста в текстареа он автоматически появлялся в этом абзаце.

import React, { useState } from 'react';

const Task7_1 = () => {
  const [value, setValue] = useState('');

  const handlechange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <textarea value={value} onChange={handlechange} />
      <p>{value}</p>
    </div>
  );
};

export default Task7_1;
