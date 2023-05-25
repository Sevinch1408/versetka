import React from 'react';
import "./mainsection.scss"
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
const Mainsection = () => {
    return (
      <div className='main-section'>
      
       <Header/>
       <Content/>
      </div> 
    );
}

export default Mainsection;
