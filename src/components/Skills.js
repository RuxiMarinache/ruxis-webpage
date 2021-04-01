import React from 'react';
import './Skills.css';

import SkillBar from 'react-skillbars';

const skills = [
  {type: "Illustrator", level: 95},
  {type: "Photoshop", level: 85},
  {type: "HTML", level: 85},
  {type: "CSS", level: 75},
  {type: "Figma", level: 90},
  {type: "C++", level: 85},
  {type: "React", level: 25},
  {type: "JavaScript", level: 25},
  
];
const colors={
  bar: '#F4DF71',
  title: {
    text: '#FBFBFB',
    background: '#003459'
  }
}



export default function Skills() {
  return (
    <div className='skill-container'>
    <h1 className='skills'>Hard Skills:</h1>
    <div className="skillbar"><SkillBar skills={skills} colors={colors}/>
    </div>
    
    </div>
  )
}