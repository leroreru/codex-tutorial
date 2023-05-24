import React from "react";

const Child = (props) => {
    return(
        <>

        {/* <h4>namaPengirim : </h4> */}
            <button onClick={() => props.functionubah('mawar')}>mawar</button>
            <button onClick={() => props.functionubah('melati')}>melati</button>
            <button onClick={() => props.functionubah('kamboja')}>kamboja</button>
            <button onClick={() => props.functionubah('sepatu')}>sepatu</button>
        </>
    )
}

export default Child