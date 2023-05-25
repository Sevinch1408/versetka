import React from 'react';
import { Search, Notification , Filter } from '../../assets/icons/Icons';
import "./header.scss"
import ProfilePhoto from "../../assets/images/photo.png";
const Header = () => {
    return (
        <div className='header'>
          <span className='header-title'>Tickets</span>
<span className='header-search'><Search /></span>
<span className='header-notif'><Notification /></span>
<span className='header-divider'></span>
<span className='header-name'>Jones Ferdinand</span>
<img src={ProfilePhoto} alt="" className='header-photo' />

        </div>
    );
}

export default Header;
