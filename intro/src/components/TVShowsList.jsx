/* Отображение списка телепередач */

import React from 'react';
import TVShowsListItem from './TVShowsListItem';

export default function TVShowsList(props) {
  return (
    <ul className='tv-shows-list'>
      {props.items.map(o => <TVShowsListItem content={o}/>)}
    </ul>
  )
}
