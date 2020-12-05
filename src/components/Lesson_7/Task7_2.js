// Дан чекбокс и абзац. Сделайте так, чтобы состояние чекбокса выводилось в этот абзац.

import React, { useState } from 'react';

const Task7_2 = () => {
  const [check, setCheck] = useState(false);

  const handlechange = (e) => {
    setCheck(!check);
  };

  return (
    <div>
      <input type="checkbox" checked={check} onChange={handlechange} />
      <p>{check ? 'true' : 'false'}</p>
    </div>
  );
};

export default Task7_2;
