import React, { useState } from 'react'

const  Counter = (props)=>{
    const [count,setCount]= useState(0)
    const [nama,setNama]=useState("")

    const Penambah=()=>{
        setCount(count +1)
    }

    const Pengurangan=()=>{
        setCount(count -1)
    }

    const UbahNama=(e)=>{
        setNama(e.target.value)
    }
return (
    <div>
      <h4>Count:{count}</h4>
      <div>
      <button onClick={Penambah}>+</button>
      <button onClick={Pengurangan}>-</button>
      </div>

      <h4>Nama:{nama}</h4>
      <input type='text'></input>
      <button onClick={()=> UbahNama()}>Tampilkan Nama</button>
    </div>
  )
};

export default Counter
