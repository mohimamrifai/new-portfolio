import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

import Backend from './Backend';
import Fronend from './Fronend';
import Fullstack from './Fullstack';

const Projects = () => {
  return (
    <div className='container'>
        <div className="projects" id='projects'>
            <h2>Projects</h2>
            <div className="front_end">
                <h4>FrontEnd</h4>
                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
                  <Fronend />
                </AnimationOnScroll>
            </div>
            <div className="backend">
              <h4>BackEnd</h4>
              <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
              <Backend />
                </AnimationOnScroll>
              
            </div>
            <div className="fullstack">
              <h4>FullStack</h4>
              <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand">
              <Fullstack />
                </AnimationOnScroll>
              
            </div>
        </div>
    </div>
  )
}

export default Projects