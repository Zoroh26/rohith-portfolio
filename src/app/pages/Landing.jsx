import React from 'react'

const classes = {
  MainContainer: 'w-full h-screen pt-24 flex justify-start ',
  Introduction: 'text-left leading-1 px-28 ',
  Greeting: 'text-[100px]  -mb-16 font-custom text-[#d9d9d9] regular-text',
  Name: 'text-[200px] -ml-4  font-custom text-[#d9d9d9] regular-text',
}
const landing = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Introduction}>
        <div className={classes.Greeting}>Hi! I'm</div>
        <div className={classes.Name}>Rohith</div>

      </div>
    </div>
  )
}

export default landing