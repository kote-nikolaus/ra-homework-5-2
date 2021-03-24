/* Прогноз погоды */

import React from 'react';
import WeatherListItem from './WeatherListItem';

export default function WeatherList(props) {
  return (
    <ul className='weather-list'>
      {props.items.map(o => <WeatherListItem content={o}/>)}
    </ul>
  )
}
