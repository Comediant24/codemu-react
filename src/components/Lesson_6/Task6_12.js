import React, { useState } from 'react';

const Task6_12 = () => {
  const [users, setUsers] = useState([
    { name: 'Коля', age: 30 },
    { name: 'Вася', age: 40 },
    { name: 'Петя', age: 50 },
  ]);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    e.target.name === '1' ? setValue1(value) : setValue2(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { name: value1, age: value2 }]);
    setValue1('');
    setValue2('');
  };

  return (
    <div>
      <table>
        {users.map((u, i) => (
          <tr key={i}>
            <td>{u.name}</td>
            <td>{u.age}</td>
          </tr>
        ))}
      </table>
      <form onSubmit={handleSubmit}>
        <input
          name="1"
          type="text"
          value={value1}
          onChange={handleInputChange}
        />
        <input
          name="2"
          type="number"
          value={value2}
          onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">Добавить юзера</button>
      </form>
    </div>
  );
};

export default Task6_12;
