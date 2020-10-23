import React, { useState } from 'react';

const Task4_3 = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Иван');
  const [age, setAge] = useState(25);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? <p>{`имя: ${name}, возраст: ${age}`}</p> : ''}
      <button onClick={handleShow}>Нажми на меня</button>
    </div>
  );
};

export default Task4_3;
