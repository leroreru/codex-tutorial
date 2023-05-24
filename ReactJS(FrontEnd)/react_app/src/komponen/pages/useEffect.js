import React, { useEffect, useState } from 'react'

const UseEffect1 = (props) => {

    const[count,setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count +1)
        },500)

    }) //tergantung depedensi
  return (
    <div>
     <h4>Count :{count}</h4>
     <button onClick={()=>setCount(0)}>STOP</button>
    </div>
  )
}

export default UseEffect1
