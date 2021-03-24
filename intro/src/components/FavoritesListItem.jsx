/* Отображение пункта списка часто посещаемых ресурсов */

import React from 'react';

export default function FavoritesListItem(props) {
  let {content} = props;

  return (
    <li className='favorites-list-item'>
      <p><a href={content.link}>{content.service} — {content.description}</a></p>
    </li>
  )
}
