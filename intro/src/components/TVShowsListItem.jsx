/* Отображение пункта списка телепередач */

import React from 'react';

export default function TVShowsListItem(props) {
  let {content} = props;

  return (
    <li className='tv-shows-list-item'>
      <p><a href={content.link}>{content.time} {content.name} {content.channel}</a></p>
    </li>
  )
}
