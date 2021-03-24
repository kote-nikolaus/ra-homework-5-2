/* Отображение пункта списка сервисов Яндекса */

import React from 'react';

export default function ServicesListItem(props) {
  let {content} = props;

  return (
    <li className='services-list-item'>
      <p><a href={content.link}>{content.name}</a></p>
    </li>
  )
}
