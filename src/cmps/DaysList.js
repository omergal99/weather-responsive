import React from 'react';


function DaysList({ list }) {

  const tableList = list.map(day => {
    return <ul key={day._id}>
      <li className="name">{day.name}</li>
      <li className="icon">
        <img src={day.img} alt={day.title} style={{height: day.title === 'sunny' ? '6.5em' : '5em'}}
        title={day.title.charAt(0).toUpperCase() + day.title.slice(1)} />
      </li>
      <li className="temp">{day.temp[0]}°/{day.temp[1]}°</li>
      <li className="title">{day.title}</li>
    </ul>
  })

  return (
    <div className="days-list flex">
      {tableList && tableList}
    </div>
  );
}

export default React.memo(DaysList);