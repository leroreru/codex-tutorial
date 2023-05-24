import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import alert from '../../config/alert'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getAllCategory } from "../../redux/action/actionReducer";



const AddProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let { productcat,message,refresh} = useSelector(state => state.productCatReducer)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    // const getData = async () => { //noredux
      // const result = await apiMethod.findAllUser();
      // setUser(result.data.result);
      dispatch(getAllCategory())
  }, [refresh]);

  
  const handleRegistration = async (data) => {
    // console.log(data.image.name)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category_id", data.category_id);
    formData.append("price", data.price);
    // for(let i=0;i<data.length;i++){
    // }
    formData.append("image", data.image[0]);
    // console.log(...formData)
    
    dispatch(createProduct(formData),navigate('/product'))
  };

  const registerOptions = {
    itemname: { required: "Item Name is required" },
    description: { required: "Description is required" },
    category: { required: "First Name is required" },
    file: { required: "File is required" },
    price: { required: "Price is required" }
  };


  return (
     <div>
          <div className="mt-2">
              <form onSubmit={handleSubmit(handleRegistration)}>
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
                          <div className="col-span-1">
                          <p className="pl-1 font-semibold ">Item Name</p>
                            <input
                              name="itemname" placeholder="Item Name"
                              {...register("name", registerOptions.itemname)}
                              className="mt-2 px-2 py-2 border w-full rounded-lg text-gray-800"
                            />
                            <p className="px-2 text-red-800">{errors?.itemname && errors.itemname.message}</p>
                          </div>
                          <div className="col-span-1">
                          <p className="pl-1 font-semibold ">Description</p>
                            <textarea
                              type="description"
                              name="description" placeholder="Description"
                              {...register(
                                "description",
                                registerOptions.description
                              )}
                              className="mt-2 border w-full rounded-lg text-gray-800"
                            />
                             <p className="px-2 text-red-800">{errors?.description && errors.description.message}</p>
                          </div>
                          <div className="col-span-1">
                              <p className="pl-1 font-semibold">Category</p>
                              <select
                                name="category"
                                {...register("category_id", registerOptions.category)}
                                className="mt-2 w-full border rounded-lg text-gray-800"
                              >
                                {(productcat || []).map((data) => (
                                  <option key={data.id} value={data.id}>
                                    {data.name}
                                  </option>
                                ))}
                              </select>
                            <p className="px-2 text-red-800"> {errors?.category && errors.category.message}</p>
                          </div>

                          <div className="col-span-1">
                          <p className="pl-1 font-semibold ">Price</p>
                            <input
                              type="number"
                              name="price" placeholder="Price"
                              {...register(
                                "price",
                                registerOptions.price
                              )}
                              className="mt-2 px-2 py-2 border w-full rounded-lg text-gray-800"
                            />
                             <p className="px-2 text-red-800">{errors?.price && errors.price.message}</p>
                          </div>

                        <div className="col-span-full">
                        <p className="pl-1 font-semibold ">File</p>

              <div className="mt-2 flex justify-center rounded-lg border border-gray-900/25 px-6 py-10">
                <div className="text-center">
                          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" 
                      name="image" 
                      type="file" 
                      className="sr-only"
                      {...register(
                        "image", registerOptions.file
                      )} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
                 </div>
                 <p className="px-2 text-red-800"> {errors?.file && errors.file.message}</p>
                  </div>
                          </div>

                        <div className="flex-row space-x-4 mt-4 text-right">
                          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Submit  
                          </button>
                          <button
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={()=> navigate('/product')}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
            </div>


             );
            };
            
          export default AddProduct;