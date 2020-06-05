import React from 'react';
import {Link} from 'react-router-dom'
const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Social Media</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/Signin">LogIn</Link></li>
            <li><Link to="/Signup">SignUp</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/create">Create Post</Link></li>
          </ul>
        </div>
      </nav>


    )
}

export default NavBar;