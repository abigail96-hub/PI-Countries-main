
import React from 'react'
import {Link} from 'react-router-dom'
import s from './Footer.module.css'



const Footer = () => {
   

    return (
       
        <div>
       <Footer>  
       <div className={s.socialiconscontainer}>
                <a href={"www.linkedin.com/in/abigail-cortés-sánchez-8252381a3"} class={s.socialicon}></a>
                <a href="" class={s.socialicon}></a>
                <a href="" class={s.socialicon}></a>
                 </div>
             
             <ul className={s.menu}> 
              <li className={s.item}>Github</li>
             <li className={s.item}>linkedin</li>
             <li className={s.item}>Henry Pi </li>
             </ul> 
             <span className={s.copyright}>&copy; 2023, Henry Countries Pi</span>



       </Footer>



        </div>

    )

}






// {/* <footer>
                
// <div className={s.socialiconscontainer}>
// <a href={"www.linkedin.com/in/abigail-cortés-sánchez-8252381a3"} class={s.socialicon}></a>
// <a href="" class={s.socialicon}></a>
// <a href="" class={s.socialicon}></a>
//  </div>

// <ul className={s.menu}> 
// <li className={s.item}>Github</li>
// <li className={s.item}>linkedin</li>
// <li className={s.item}>Henry Pi </li>
// </ul> 
// <span className={s.copyright}>&copy; 2023, Henry Countries Pi</span>
// </footer> */}















export default Footer