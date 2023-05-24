import React, { useState } from 'react'
import ChildCal from './childCalculator'

const ParentCal=()=>{
const [angka1,setAngka1] = useState(0)
const [angka2,setAngka2] = useState(0)
const [hasil,setHasil] = useState(0)
        
const inputChangeHandle1=(e)=>{
setAngka1(e.target.value)
}
        
const inputChangeHandle2=(e)=>{
setAngka2(e.target.value)
}
        
const penjumalahan=()=>{
            setHasil(+angka1 + +angka2)
}

return (
    <div>
      <input type='text' value={angka1} onChange={inputChangeHandle1}></input>
      <input type='text' value={angka2} onChange={inputChangeHandle2}></input>
      <br></br>
      <label>Hasil:{hasil}</label>
      <ChildCal functiontambah={penjumalahan} />
    </div>
  )
}
export default ParentCal
