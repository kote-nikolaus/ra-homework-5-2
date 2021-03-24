/* Отображение пункта списка с курсом валют */

import React from 'react';

export default function ExchangeRateListItem(props) {
  let {content} = props;

  return (
    <li className='exchange-rate-list-item'>
      <p>{content.name} {content.course} {content.fluctuation}</p>
    </li>
  )
}
