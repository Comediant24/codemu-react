import React, { useState } from 'react';

const Input = ({ title, name, value, onChange }) => {
  return (
    <>
      <h4 style={{ margin: 0 }}>{title}</h4>
      <input
        autoComplete="off"
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

const Task6_7 = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [paragraphText, setParagraphText] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case '1':
        setValue1(value);
        break;
      case '2':
        setValue2(value);
        break;
      case '3':
        setValue3(value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphText(`${value1} ${value2} ${value3}`);
    setValue1('');
    setValue2('');
    setValue3('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          title="Фамилия"
          value={value1}
          name="1"
          onChange={handleInputChange}
        />
        <br></br>
        <Input
          title="Имя"
          value={value2}
          name="2"
          onChange={handleInputChange}
        />
        <br></br>
        <Input
          title="Отчество"
          value={value3}
          name="3"
          onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">ФИО</button>
      </form>
      <p>{paragraphText}</p>
    </div>
  );
};

export default Task6_7;
