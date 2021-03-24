/* Виджет с поисковой строкой и списком сервисов Яндекса */

import React from 'react';
import ServicesList from './ServicesList';

export default function SearchWidget(props) {
  let {items, suggestion} = props;
  return (
    <section className='search-widget'>
      <ServicesList items={items}/>
      <img src='https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg'></img>
      <input placeholder={suggestion}></input>
      <button>Найти</button>
    </section>
  )
}
