import React from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const succesAlert =(message:any)=> {
    toast.success(`${message}`, {
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

const unSuccesAlert =(message:any)=> {
    toast.error( `${message}`, {
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