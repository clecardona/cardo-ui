import * as React from "react"
import "./BigButton.sass"


const BigButton = ({text}:{text:string}) => {
  return (
    <button className='big-button' onClick={()=>alert("YOLO")}>
        <h3>{text}</h3></button>
  )
}

export default BigButton