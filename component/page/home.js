import React from 'react';
import '../style/home.css';
import img_3 from '../image/jedi.jpeg';
import img_2 from '../image/storm.jpeg';


function home() {
  return (
    <div className='home'>
        <div className='box-left'>
        <img src={img_3} alt='img-3'></img>
          <div className='container'></div>

        <h1 className='title'>J-Mest</h1> 
        </div>
     
        <div className='box-right'>
        <img src={img_2} alt='img-2'></img>

        <h1>Storm in the country</h1>
        <p></p>
        </div>
        </div>
        
      
        
        
        
  )
}

export default home