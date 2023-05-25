import React from 'react';

import "./sidebarBtn.scss"
const SidebarBtn = (props) => {
    const { icon, title } = props;
    return (
        <button className='btn'>
            <span className='btn-icon'>{icon}</span>
            <span className='btn-title'>{title}</span>
        </button>
    );
}

export default SidebarBtn;

