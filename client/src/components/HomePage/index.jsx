import React from 'react'
import {RiMovie2Fill} from 'react-icons/ri'
import TopMovies from './TopMovies'
import { Link } from "react-router-dom";

export default function Homepage() {

  const user = JSON.parse(localStorage.getItem('user'))
 

  
  return (
    <div>
      {/* NAV of the homepage */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand brand-left" >
          <RiMovie2Fill className='BrandLogo' />
          MovieDB
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
                {/* Sign in Button */}
               {(!user) ? 
                    <ul className="nav justify-content-end move_right">
                      <li className="nav-item">
                      <Link to="/login">
                         <span className="nav-link" href="#">
                             <div className="btn btn-primary" >Sign In</div>
                         </span>
                      </Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/signup" >
                           <span className="nav-link" href="#">
                              <div className="btn btn-success" >Sign Up</div>
                           </span>
                       </Link>
                   </li>
                  </ul>
               : 
               <div className="nav justify-content-end move_right">
                <div className="user_icon nav-item">
                 { user.data.firstName[0].toUpperCase()}
               </div>
               </div>
               }
            
            </div>
            </nav>  
            {/* END of NAV of the homepage */}

            <div className="container">
                <TopMovies/>
            </div>
    </div>
  )
}

