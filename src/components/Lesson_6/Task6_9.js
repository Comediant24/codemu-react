import React, { useState } from 'react';

const Task6_9 = () => {
  const [users, setUsers] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, value]);
    setValue('');
  };

  return (
    <div>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u}
            <button
              onClick={() => {
                const dudes = users.map((el) => el);
                dudes.splice(i, 1);
                setUsers(dudes);
              }}
            >
              Удалить пункт
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          name="1"
          type="text"
          value={value}
          onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">Добавить юзера</button>
      </form>
    </div>
  );
};

export default Task6_9;
