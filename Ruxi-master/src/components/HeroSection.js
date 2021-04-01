import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
        <div className="hero-image">
            <div className="hero-text">
            <h1>Hi!</h1>
            <h2 className="hero-text">i'm Ruxi</h2>
            <p className="question"> 
            Wanna find out more about me?
            </p>
            <div className="rectangle" />
            <div className ="image" />

            
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          click here
        </Button>
        
        
        </div>
        </div>
  
        </div>
    )
}

export default HeroSection
