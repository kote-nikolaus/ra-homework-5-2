/* Отображение пункта списка новостей */

import React from 'react';

export default function NewsListItem(props) {
  let {content} = props;

  return (
    <li className='news-list-item'>
      <img src={content.icon}></img>
      <p><a href={content.link}>{content.text}</a></p>
    </li>
  )
}
