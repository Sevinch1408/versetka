import React from 'react';
import {Sort, Filter } from '../../assets/icons/Icons';
import "./content.scss"
const Content = () => {
    return (
       <div>
 <div className='card'>
          <span className='title'>All tickets</span> 
<span className='sort'>
<Sort/>
</span>
<span className='sort-text'>Sort</span>
<span className='filter'><Filter/></span>
<span className='filter-title'>Filter</span>
        </div>
<div className='type'>
  <span className='type-details'>
  Ticket details
  </span>
  <span className='type-name'>Customer name</span>
  <span className='type-date'>Date</span>
  <span className='type-priority'>Priority</span>


</div>
       </div>
        
    );
}

export default Content;
