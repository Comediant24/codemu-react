import React, { useState } from 'react';

const Task4_1 = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('Иван');

  return (
    <div>
      <p>{`${show ? 'Привет' : 'Пока'}, ${name}!`}</p>
    </div>
  );
};

export default Task4_1;
