/* Отображение списка часто посещаемых ресурсов */

import React from 'react';
import FavoritesListItem from './FavoritesListItem';

export default function FavoritesList(props) {
  return (
    <ul className='favorites-list'>
      {props.items.map(o => <FavoritesListItem content={o}/>)}
    </ul>
  )
}
