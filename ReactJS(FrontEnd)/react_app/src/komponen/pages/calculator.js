import React, { useState } from 'react'

const Calculator=()=>{
const [angka1,setAngka1] = useState(0)
const [angka2,setAngka2] = useState(0)
const [hasil,setHasil] = useState(0)
const [nama,setNama] = useState(0)
const [label,setLabel] = useState('')

const inputChangeHandle1=(e)=>{
setAngka1(e.target.value)
}

const inputChangeHandle2=(e)=>{
    setAngka2(e.target.value)
    }

    const inputChangeHandle3=(e)=>{
        setNama(e.target.value)
        }

const penjumalahan=()=>{
    setHasil(+angka1+ +angka2)
}

const ubahNama=()=>{
    setLabel(nama)
}
return (
    <div>
      <input type='number' value={angka1} onChange={inputChangeHandle1}></input>
      <input type='number' value={angka2} onChange={inputChangeHandle2}></input>
      <br></br>
      <label>Hasil:{hasil}</label>
      <br></br>
      <button onClick={penjumalahan}>+</button>
      <br></br>
      <input type='text' value={nama} onChange={inputChangeHandle3}></input>
      <br></br>
      <label>NAMA : {label}</label>
      <button onClick={ubahNama}>UBAH NAMA</button>
    </div>
  )
}


export default Calculator
