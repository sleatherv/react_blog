import React from 'react';
import fatal from '../static/img/fatal.svg';

export default function Fatal(props) {
  return (
    <div className='center'>
      <h2>{props.message}</h2>
      <img src={fatal} alt="Error" />
    </div>
  )
}
