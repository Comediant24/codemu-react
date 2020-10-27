import React, { useState } from 'react';

const Task6_11 = () => {
  const [users, setUsers] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  const [value, setValue] = useState('');
  const [err, setErss] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value > users.length) {
      return setErss('Ведите меньшее число');
    }
    if (value) {
      const arr = users.map((el) => el);
      arr.splice(value - 1, 1);
      setUsers(arr);
      setErss('');
      setValue('');
    }
  };

  return (
    <div>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          name="1"
          type="number"
          value={value}
          onChange={handleInputChange}
        />
        <br></br>
        <span>{err}</span>
        <br></br>
        <button type="submit">Удалить юзера</button>
      </form>
    </div>
  );
};

export default Task6_11;
