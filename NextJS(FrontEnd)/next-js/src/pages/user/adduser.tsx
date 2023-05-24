import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { doRequestAddUser } from "../redux/action/actionReducer";

const AddUser = () => {
  type FormValues = {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const [pesan,setPesan] = useState('')
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRegistration = async (data: any) => {
    dispatch(doRequestAddUser(data));

    router.push("/user");
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
      <div className="mt-2">
        <h1 className="font-bold text-center">TAMBAH USER</h1>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
            <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
              <div className="col-span-1">
                <p className="pl-1 font-semibold ">Username</p>
                <input
                  placeholder="Username"
                  {...register("username", registerOptions.username)}
                  className="px-2 py-2 border w-full rounded-lg text-gray-800"
                />
                <p className="px-2 text-red-800">
                  {errors?.username && errors.username.message}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pl-1 font-semibold">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", registerOptions.password)}
                  className="px-2 py-2 border w-full rounded-lg text-gray-800"
                />
                <p className="px-2 text-red-800">
                  {errors?.password && errors.password.message}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pl-1 font-semibold">Firstname</p>
                <input
                  type="text"
                  placeholder="Firstname"
                  {...register("firstname", registerOptions.firstname)}
                  className="px-2 py-2 w-full border rounded-lg text-gray-800"
                />
                <p className="px-2 text-red-800">
                  {" "}
                  {errors?.firstname && errors.firstname.message}
                </p>
              </div>
              <div className="col-span-1">
                <p className="pl-1 font-semibold">Lastname</p>
                <input
                  type="text"
                  placeholder="Lastname"
                  {...register("lastname", registerOptions.lastname)}
                  className="px-2 py-2 border w-full rounded-lg text-gray-800"
                />
                <p className="px-2 text-red-800">
                  {errors?.lastname && errors.lastname.message}
                </p>
              </div>
            </div>
            <div className="flex-row space-x-4 mt-4 text-right">
              <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Submit
              </button>
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => router.push("/user")}
              >
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
