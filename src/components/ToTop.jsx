import React, { useState } from 'react'

const ToTop = () => {

    const [panah, setPanah] = useState('panah')


   document.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if(window.pageYOffset >= 500){
        setPanah("panah_active")
    } else {
        setPanah("panah")
    }
   })

  return (
    <div className={panah} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
        <img src="assets/up-arrow.png" alt="jhsdu" />
    </div>
  )
}

export default ToTop