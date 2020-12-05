/*
Дан чекбокс и инпут.
Сделайте так, чтобы если чекбокс не отмечен - то инпут находится
в заблокированном состоянии(через disabled, а если отмечен - то в незаблокированном.
*/

import React, { useState } from 'react';

const Task7_12 = () => {
  const [check, setCheck] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleСhangeCheckBox = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <label>
        Заблочить инпут?
        <input
          type="checkbox"
          checked={check}
          onChange={handleСhangeCheckBox}
        />
      </label>

      <div>
        <input disabled={check} value={valueInput} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Task7_12;
