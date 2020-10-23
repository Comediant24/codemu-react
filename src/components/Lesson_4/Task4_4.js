import React, { useState } from 'react';

const Task4_4 = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('Иван');
  const [age, setAge] = useState(25);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? <p>{`имя: ${name}, возраст: ${age}`}</p> : ''}
      <button onClick={handleShow}>{show ? 'Скрыть' : 'Показать'}</button>
    </div>
  );
};

export default Task4_4;
