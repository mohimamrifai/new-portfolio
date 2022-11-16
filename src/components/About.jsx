import React from 'react'
import "@lottiefiles/lottie-player";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const About = () => {
  return (
    <div className='about'  id='about'>
        <div className="about_col_satu">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={.8}>
            <h5>About me</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente ea quos magni quod ad esse architecto quibusdam libero vel laboriosam ipsa, aspernatur sunt fugit nam natus laudantium dicta nesciunt. Exercitationem aliquam dolor totam voluptatum, voluptatibus hic, aspernatur beatae nihil doloribus dignissimos illo, nulla harum nobis soluta accusamus esse quaerat.</p>
        </AnimationOnScroll>
        </div>

        <div className="about_col_dua">
        <AnimationOnScroll animateIn="animate__fadeInRightBig" duration={.8} offset={300}>
              <lottie-player
                    autoplay
                    loop
                    className="lotti"
                    mode="normal"
                    src="https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json"
                    >
                </lottie-player>
        </AnimationOnScroll>
        </div>
    </div>
    
  )
}

export default About