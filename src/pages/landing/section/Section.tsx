import React from 'react'
import classes from './Section.module.scss'

const Section = () => {
  return (
    <div className={classes.container}> 
         <section className={classes.section}>
        <h1>Key Features</h1>
        <div className={classes.description}>        <span>BallochParkGuide guarantees to vastly improve your overall experience, making your visit well-prepared and more enjoyable with the following key features.</span>
</div>
      </section> </div>
  )
}

export default Section