import React, { useState } from 'react';

const Task6_10 = () => {
  const [urls, setUrls] = useState([
    { href: '1.html', text: 'ссылка 1' },
    { href: '2.html', text: 'ссылка 2' },
    { href: '3.html', text: 'ссылка 3' },
  ]);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    e.target.name === '1' ? setValue1(value) : setValue2(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrls([...urls, { href: value1, text: value2 }]);
    setValue1('');
    setValue2('');
  };

  return (
    <div>
      <ul>
        {urls.map((u, i) => (
          <li key={i}>
            <a href={u.href}>{u.text}</a>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          name="1"
          type="text"
          value={value1}
          onChange={handleInputChange}
        />
        <input
          name="2"
          type="text"
          value={value2}
          onChange={handleInputChange}
        />
        <br></br>
        <button type="submit">Добавить юзера</button>
      </form>
    </div>
  );
};

export default Task6_10;
