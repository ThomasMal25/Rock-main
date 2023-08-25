import React from 'react'

function Endmenu(props) {
    

    const clicked = () => {
        props.setIstrue((prev)=>!prev)
    }
    <div>
        <h1>You lost </h1>
        <h4>Your score:{props.score} </h4>
        <button onClick={clicked}>Play Again:</button>
    </div>
  
}

export default Endmenu