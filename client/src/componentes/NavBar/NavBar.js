import React from 'react';
import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import { useLocation } from 'react-router-dom';

export default function NavBar({match}){

 let location = useLocation();

 return(
  <div className={style.navbar}>  
  <div className={style.title}> 
  <span>Countries App </span>
  
  </div>

{

!match.isExact ?
<div>
<span>
<Link to={'/home'}> 
<button className={style.btn2}> 
   Home 
   </button>
    </Link>
 </span>
 </div>
 : <div>

 </div>
}
{
 
 location.pathname !== '/home/activity' ?
 <div>
<span> 
 <Link to={'/home/activity'}>
    <button className={style.btn3}> 
       Create Activity
    </button>
 </Link>
</span>
 </div>
 : <div>
 </div>

}
 </div>

 )


}
















 



