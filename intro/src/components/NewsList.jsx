/* Отображение списка новостей */

import React from 'react';
import NewsListItem from './NewsListItem';

export default function NewsList(props) {
  return (
    <ul className='news-list'>
      {props.items.map(o => <NewsListItem content={o}/>)}
    </ul>
  )
}
