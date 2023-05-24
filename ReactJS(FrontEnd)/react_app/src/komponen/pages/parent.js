import React, { useState } from "react";
import Child from "./child";


const Bunga = () => {
    const [bunga, setBunga] = useState('matahari')

    const ubahBunga = (e) =>{
        setBunga(e)
    }
    return (
        <div>
            <div>
                <h4>{bunga}</h4>
                {/* <button onClick={()=>ubahBungan('mawar')}>mawar</button>
                <button onClick={()=>ubahBungan('melati')}>melati</button>
                <button onClick={()=>ubahBungan('kamboja')}>kamboja</button>
                <button onClick={()=>ubahBungan('sepatu')}>sepatu</button> */}

                <Child functionubah={ubahBunga}/>
               
            </div>
        </div>
    )
}

export default Bunga