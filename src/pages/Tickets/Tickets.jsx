import React from 'react';
import Sidebar from '../../containers/Sidebar/Sidebar';
import "./tickets.scss"
import Mainsection from '../../containers/MainSection/Mainsection';

const Tickets = () => {
    return (
      <div className='tickets'>
      <Sidebar/> 
      <Mainsection/>
      </div>
    );
}

export default Tickets;
