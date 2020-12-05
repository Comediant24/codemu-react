// Даны 3 радиокнопочки со значениями 1, 2 и 3. Дан абзац. Сделайте так, чтобы значение выбранной радиокнопочки выводилось в этот абзац.

import React, { useState } from 'react';

const Task7_6 = () => {
  const [value, setValue] = useState(null);

  const handlechange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="radio" name="number" onChange={handlechange} value="1" />
      <input type="radio" name="number" onChange={handlechange} value="2" />
      <input type="radio" name="number" onChange={handlechange} value="3" />
      <p>{value}</p>
    </div>
  );
};

export default Task7_6;
