import React from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className='header-div'>
        <img 
            alt='logo'
            className='header-logo'
            src="https://files.sbcdnsb.com/images/UOaWuEWwyE0nSZewb5dWNg/businesses/1703786811/mh_noir__2_.png" 
        />
        <div className='header-icon'>
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
    </div>
  )
}

export default Header