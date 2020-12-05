/*
Даны 3 селекта. В первом можно выбрать день, во втором месяц, а в третьем год.
Дан абзац. Сделайте так, чтобы в этот абзац вывелся день недели за выбранную дату.
Пусть по умолчанию в селекте отображается текущая дата.
*/

import React, { useEffect, useState } from 'react';

const getMonths = Array.from({ length: 12 }, (e, i) => {
  return {
    value: i + 1,
    month: new Date(null, i + 1, null).toLocaleDateString('ru', {
      month: 'long',
    }),
  };
});

const getDays = (y, m) => {
  return Array.from({ length: new Date(y, m, 0).getDate() }, (e, i) => {
    return new Date(null, null, i + 1).toLocaleDateString('ru', {
      day: 'numeric',
    });
  });
};

const getYears = () => {
  const max = new Date().getFullYear();
  const min = max - 50;
  let years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};

const getTodayDate = new Date();

const Task7_13 = () => {
  const [selectDay, setSelectDay] = useState({
    day: getTodayDate.getDate(),
    month: getTodayDate.getMonth() + 1,
    year: getTodayDate.getFullYear(),
  });

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const { day, month, year } = selectDay;
    setCurrentDate(getWeekDay(year, month - 1, day));
  }, [selectDay]);

  const handleSelect = (e) => {
    const target = e.target;
    setSelectDay({ ...selectDay, [target.name]: target.value });
  };

  function getWeekDay(y, m, d) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[new Date(y, m, d).getDay()];
  }

  return (
    <div>
      <select name="day" value={selectDay.day} onChange={handleSelect}>
        {getDays(selectDay.year, selectDay.month).map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>

      <select name="month" value={selectDay.month} onChange={handleSelect}>
        {getMonths.map((month, index) => (
          <option key={index} value={month.value}>
            {month.month}
          </option>
        ))}
      </select>

      <select name="year" value={selectDay.year} onChange={handleSelect}>
        {getYears().map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div>
        <p>{currentDate}</p>
      </div>
    </div>
  );
};

export default Task7_13;
