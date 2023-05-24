import React, { useEffect, useState } from 'react'

function Latihan() {
    const [data,setNama]= useState('')
    const [label,setLabel]= useState('')


    // const [isClick,setIsClick] = useState(false)
    const [isAdd,setIsAdd]=useState(false)
    const [isUpdate,setIsUpdate]=useState(false)
    const [isDelete,setIsDelete]=useState(false)

    useEffect(()=>{
        setLabel(data)
    },[isAdd],[isUpdate],[isDelete])

    const HandleChange=(e)=>{
        setNama(e.target.value)
    }

    // const HandleChangeLabel=()=>{
    //     setLabel(label +' '+ data)
    // }

    // const HandleEdit=()=>{
    //     setLabel(data)
    // }

    const reset=()=>{
        setLabel('')
        setNama('')
    }
  return (
    <div>
      <input type='text' value={data} onChange={HandleChange}></input>
      <br></br>
      <label>{label}</label>
      <br></br>
      {/* <button onClick={HandleChangeLabel}>Add</button>
      <button onClick={HandleEdit}>Edit</button>
      <button onClick={reset}>Reset</button> */}
      <button onClick={()=>setIsAdd(!isAdd)}>Add</button>
      <button onClick={()=>setIsAdd(!isAdd)}>Edit</button>
      <button onClick={reset}>Reset</button>
      <br></br>
      <br></br>
      <marquee>Mari Belajar React</marquee>
    </div>
  )
}

export default Latihan
