import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import apiMethod from "../../api/apiMethod";
import { useForm } from "react-hook-form";
import alert from '../../config/alert'
import { useNavigate } from 'react-router-dom'



const AddUser = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [pesan,setPesan] = useState('')
  const navigate = useNavigate();
  
  const handleRegistration = async (data) => {
    const result = await apiMethod.createUserCus(data); 
    const status = result.data.status
    if (result.status){
      if(status === 200){
        alert.succesAlert(`Succes`, `${result.data.message}`)
      }
      else if (status === 400){
        alert.unSuccesAlert(`${result.data.result}`, `${result.data.message}`)
      } 
    navigate('/user')
    };
  };

  const registerOptions = {
    username: { required: "Name is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    firstname: { required: "First Name is required" },
    lastname: { required: "Last Name is required" },
  };


 


  return (
     <div>
      {/* <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pb-1 border-b text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Users
                  </Dialog.Title> */}
                  <div className="mt-2">
                      <h1 className="font-bold text-center">TAMBAH USER</h1>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
                          <div className="col-span-1">
                          <p className="pl-1 font-semibold ">Username</p>
                            <input
                              name="username" placeholder="Username"
                              {...register("username", registerOptions.username)}
                              className="px-2 py-2 border w-full rounded-lg text-gray-800"
                            />
                            <p className="px-2 text-red-800">{errors?.username && errors.username.message}</p>
                          </div>
                          <div className="col-span-1">
                          <p className="pl-1 font-semibold">Password</p>
                            <input
                              type="password"
                              name="password" placeholder="Password"
                              {...register(
                                "password",
                                registerOptions.password
                              )}
                              className="px-2 py-2 border w-full rounded-lg text-gray-800"
                            />
                             <p className="px-2 text-red-800">{errors?.password && errors.password.message}</p>
                          </div>
                          <div className="col-span-1">
                          <p className="pl-1 font-semibold">Firstname</p>
                            <input
                                type="text"
                              name="firstname" placeholder="Firstname"
                              {...register(
                                "firstname",
                                registerOptions.firstname
                              )}
                              className="px-2 py-2 w-full border rounded-lg text-gray-800"
                            />
                            <p className="px-2 text-red-800"> {errors?.firstname && errors.firstname.message}</p>
                          </div>
                          <div className="col-span-1">
                          <p className="pl-1 font-semibold">Lastname</p>
                            <input
                              type="text"
                              name="lastname" placeholder="Lastname"
                              {...register(
                                "lastname",
                                registerOptions.lastname
                              )}
                              className="px-2 py-2 border w-full rounded-lg text-gray-800"
                            />
                             <p className="px-2 text-red-800">{errors?.lastname && errors.lastname.message}</p>
                          </div>
                        </div>
                        <div className="flex-row space-x-4 mt-4 text-right">
                          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Submit  
                          </button>
                          <button
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={()=> navigate('/user')}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                {/* </Dialog.Panel> */}
              {/* </Transition.Child> */}
            </div>
          // </div>
        // </Dialog>
      // </Transition>
    // </div>
  );
};

export default AddUser;