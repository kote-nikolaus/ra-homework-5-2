/* Отображение пункта списка в прогнозе погоды */

import React from 'react';

export default function WeatherListItem(props) {
  let {content} = props;

  return (
    <li className='weather-list-item'>
      <p>{content.time} {content.weather} {content.icon}</p>
    </li>
  )
}
