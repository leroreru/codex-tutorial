import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { doRequestAddProductCat } from "../redux/action/actionReducer";
import { useRouter } from "next/router";

const AddProduct = () => {
  type FormValues = {
    name: string;
    description: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();
  const dispatch = useDispatch();

  const handleRegistration = async (data: any) => {
    dispatch(doRequestAddProductCat(data));
    router.push("/productcat");
  };

  const registerOptions = {
    name: { required: "Nama Produk is required" },
    description: { required: "Description is required" },
  };

  return (
    <div className="mt-2">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <div className="col-span-1">
              <p className="pl-1 font-semibold ">Name Product</p>
              <input
                placeholder="Name Product"
                {...register("name", registerOptions.name)}
                className="mt-2 px-2 py-2 border w-full rounded-lg text-gray-800"
              />
              <p className="px-2 text-red-800">
                {errors?.name && errors.name.message}
              </p>
            </div>

            <div className="col-span-1">
              <p className="pl-1 font-semibold ">Description</p>
              <input
                placeholder="Description"
                {...register("description", registerOptions.description)}
                className="mt-2 px-2 py-2 border w-full rounded-lg text-gray-800"
              />
              <p className="px-2 text-red-800">
                {errors?.description && errors.description.message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-row space-x-4 mt-4 text-center">
          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            Submit
          </button>
          <button
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => router.push("/productcat")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
