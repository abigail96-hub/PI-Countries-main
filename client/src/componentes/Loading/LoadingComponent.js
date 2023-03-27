import React from 'react';
import style from './Loading.module.css';


export default function Loading (){

  return (

  <div className={style.loader}>
  {/* <div className={style.ring}> </div> */}
  <span > Loading ... </span> 
  
  </div>

  )



}