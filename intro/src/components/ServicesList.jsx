/* Отображение списка сервисов Яндекса */

import React from 'react';
import ServicesListItem from './ServicesListItem';

export default function ServicesList(props) {
  return (
    <ul className='services-list'>
      {props.items.map(o => <ServicesListItem content={o}/>)}
    </ul>
  )
}
