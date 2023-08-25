import React from 'react'
import { useState } from 'react'
import scissors from '../images/icon-scissors.svg'
import  rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'

function User(props) {

    
    const handleClick = (e) => {
        props.setInput(e.target.getAttribute('value'))
        props.setIsTrue((prev) => !prev)
    
      }
  return (
    <div className='image'>
    <img onClick={handleClick} value='rock' src={rock} alt="rock" />
    <img onClick={handleClick} value='paper' src={paper} alt="rock" />
    <img onClick={handleClick}  value='scissors' src={scissors} alt="rock" /></div>
  )
}

export default User