import React, { useState } from 'react'

const DataObject = (props)=>{
    const [person,setPerson] = useState({
        nama : 'Zufar',
        alamat : 'Jogya',
        usia : 20
    })

const HandleChange=(e)=>{
    setPerson(p=>{
        return{...p,[e.target.name]:[e.target.value]}
    })
}
return (
    <div>
    <div>
      <input type='text' name='nama' onChange={HandleChange}></input>
      <input type='text' name='alamat' onChange={HandleChange}></input>
      <input type='text' name='usia' onChange={HandleChange}></input>
    </div>
        <p>Nama :{person.nama}</p>
        <p>Alamat :{person.alamat}</p>
        <p>Usia :{person.usia}</p>
    </div>
  )
}
export default DataObject
