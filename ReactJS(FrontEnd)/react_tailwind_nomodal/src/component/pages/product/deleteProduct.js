import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import apiMethod from "../../api/apiMethod";
import { useForm } from "react-hook-form";
import alert from '../../config/alert'
import { useDispatch } from "react-redux";
import { delUser, deleteProduct } from "../../redux/action/actionReducer";

const DeleteProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()

  const handleRegistration = async (data) => {
    dispatch(deleteProduct(data),props.closeModal())
  };
  const registerOptions = {
    id: { required: "id is required" }
  };

//   console.log(props.prodById)
  return (
     <div>
      <Transition appear show={props.show} as={Fragment}>
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
                    Delete Users
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
                        <p className="-mt-2 pb-2 text-center text-md font-medium leading-6 text-gray-900">~ {props.prodById.name} ~</p>
                          <p className="pb-10 text-center text-md font-medium leading-6 text-gray-900">Apakah anda yakin ingin menghapus data ini ?</p>
                          <input
                              type="hidden"
                              name="id" 
                              defaultValue={props.prodById.id}
                              {...register(
                                "id",
                                registerOptions.id
                              )}
                              className="px-2 py-2 border w-full rounded-lg text-gray-800"
                            />
                        </div>
                        <div className=" flex-row space-x-4 mt-0 text-center">
                          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Submit
                          </button>
                          <button
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={props.closeModal}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DeleteProduct;