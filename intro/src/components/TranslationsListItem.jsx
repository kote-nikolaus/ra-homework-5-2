/* Отображение пункта списка эфиров */

import React from 'react';

export default function TranslationsListItem(props) {
  let {content} = props;

  return (
    <li className='translations-list-item'>
      <img src='https://yastatic.net/s3/home/services/block/video.svg'></img>
      <p><a href={content.link}> {content.name} {content.channel}</a></p>
    </li>
  )
}
