import React, { useState } from 'react';

const Task4_7 = () => {
  const [names, setNames] = useState([
    { href: '1.html', text: 'ссылка 1' },
    { href: '2.html', text: 'ссылка 2' },
    { href: '3.html', text: 'ссылка 3' },
  ]);

  return (
    <div>
      <ul>
        {names.map((element) => (
          <li>
            <a href={element.href}>{element.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task4_7;
