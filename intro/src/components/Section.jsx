/* Универсальный компонент для отображения секций */

import React from 'react';

export default function Section(props) {
  return (
    <section className='section'>
      <h2 className='section-title'>{props.title}</h2>
      <div className='section-body'>{props.children}</div>
    </section>
  )
}
