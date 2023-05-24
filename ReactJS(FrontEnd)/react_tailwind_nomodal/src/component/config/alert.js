import React from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const succesAlert =(succes,message)=> {
    toast.success(`${succes}, ${message}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

const unSuccesAlert =(succes,message)=> {
    toast.error(`${succes}, ${message}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

export default {
    succesAlert ,
    unSuccesAlert
}