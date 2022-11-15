import React from 'react'
import { IconContext } from 'react-icons'

import {DiBootstrap, DiJavascript1, DiMongodb, DiNodejs, DiReact, DiSass} from 'react-icons/di'

const Teknologi = () => {
  return (
    <div className='teknologi'>
        <div className="container">
            <h5>Tech Stack</h5>
            <IconContext.Provider
            value={{ color: '#5B42F3', size: '90px' }}>
            <div className="tech_icons">
                <DiJavascript1 />
                <DiReact />
                <DiNodejs />
                <DiBootstrap />
                <DiSass />
                <DiMongodb />
            </div>
            </IconContext.Provider>
        </div>
    </div>
  )
}

export default Teknologi