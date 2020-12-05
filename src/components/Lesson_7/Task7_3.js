// Дан чекбокс и какой-то абзац с текстом. Сделайте так, чтобы если чекбокс отмечен - абзац был виден на экране, а если не отмечен - не видим.

import React, { useState } from 'react';

const Task7_3 = () => {
  const [check, setCheck] = useState(false);

  const handlechange = (e) => {
    setCheck(!check);
  };

  const TEXT = 'JS строго типизированный язык';

  return (
    <div>
      <p>Псс.. Хочешь лжи?</p>
      <input type="checkbox" checked={check} onChange={handlechange} />
      <p>{check ? TEXT : ''}</p>
    </div>
  );
};

export default Task7_3;
