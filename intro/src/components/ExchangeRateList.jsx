/* Отображение списка с курсом валют */

import React from 'react';
import ExchangeRateListItem from './ExchangeRateListItem';

export default function ExchangeRateList(props) {
  return (
    <ul className='exchange-rate-list'>
      {props.items.map(o => <ExchangeRateListItem content={o}/>)}
    </ul>
  )
}
