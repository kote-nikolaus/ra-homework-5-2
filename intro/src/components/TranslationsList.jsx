/* Отображение списка эфиров */

import React from 'react';
import TranslationsListItem from './TranslationsListItem';

export default function TranslationsList(props) {
  return (
    <ul className='translations-list'>
      {props.items.map(o => <TranslationsListItem content={o}/>)}
    </ul>
  )
}
