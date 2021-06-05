import React from 'react'
import {Link} from 'react-router-dom'
import './Header.style.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'


const Header =()=>(
    <div className='header'>
        <div className='logo-container'>
          <Link to='/' >
              <Logo/>
          </Link>
        </div>

        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='' className='option'>Contact</Link>

        </div>

    </div>
)

export default Header;