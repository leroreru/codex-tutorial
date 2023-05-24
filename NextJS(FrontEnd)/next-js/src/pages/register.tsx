import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { doRequestAddUser, doRequestGetLogin } from "./redux/action/actionReducer";
import alert from "./config/alert";
import { useDescriptions } from "@headlessui/react/dist/components/description/description";

const register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { message,status,refresh } = useSelector((state: any) => state.userReducers);

  const dispatch = useDispatch();
  const router = useRouter();

  type FormValues = {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    confirmPassword : string ;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = async (data: any) => {
    dispatch(doRequestAddUser(data));
   
    router.push("/register");
};



  const registerOptions = {
    username: { required: "Username is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    firstname: { required: "Firstname is required" },
    lastname: { required: "Lastname is required" },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="bg-green-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-green-800 bottom-0 leading-5 h-full w-full overflow-hidden">
          <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
            <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
              <div className="self-start hidden lg:flex flex-col text-gray-300">
                <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
                <p className="pr-3 text-sm opacity-75">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups
                </p>
              </div>
            </div>
            <div className="flex justify-center self-center z-10">
              <div className="p-12 bg-white mx-auto rounded-3xl w-96">
                <div className="mb-7">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Sign Up
                  </h3>
                  <p className="text-gray-400">
                    Have an account?{" "}
                    <a
                      href="/login"
                      className="text-sm text-green-700 hover:text-green-400"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <input
                      className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-green-400"
                      type="Username"
                      placeholder="Username"
                      {...register("username", registerOptions.username)}
                    />
                    <p className="px-2 text-red-800">
                      {errors?.username && errors.username.message}
                    </p>
                  </div>

                  <div className="relative">
                    <input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", registerOptions.password)}
                      className="text-sm  px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-400"
                    />
                    <p className="px-2 text-red-800">
                      {errors?.password && errors.password.message}
                    </p>

                    <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                      <svg
                        onClick={toggleShowPassword}
                        className={`h-4 text-green-700 ${
                          showPassword ? "hidden" : "block"
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-88.22 0-160-71.78-160-160S199.78 80 288 80s160 71.78 160 160-71.78 160-160 160zm0-272c-48.53 0-96.61 18.12-133.89 53.72a236.95 236.95 0 0 0 0 202.56C191.39 354.88 239.47 373 288 373s96.61-18.12 133.89-53.72a236.95 236.95 0 0 0 0-202.56C384.61 145.12 336.53 127 288 127z"
                        ></path>
                      </svg>
                      <svg
                        onClick={toggleShowPassword}
                        className={`h-4 text-green-700 ${
                          showPassword ? "block" : "hidden"
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M320 32C149 32 0 153.13 0 288c0 76.57 42.24 143.62 109.99 189.37l-50.34 50.34A32 32 0 0 0 96 544h96v-48h-31.74l29.41-29.41A191.88 191.88 0 0 0 224 288c0-106 86-192 192-192s192 86 192 192c0 106-86 192-192 192H288a32 32 0 0 0-32 32v48a32 32 0 0 0 32 32h192a32 32 0 0 0 31.74-28.63l50.34-50.34C597.76 431.62 640 364.57 640 288c0-134.87-149-256-320-256zm32 320H288a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64zm-96-96h-64a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64zm96-96H288a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64zm32-160a160 160 0 1 0-160 160 160 160 0 0 0 160-160zm32 192h-64a32 32 0 0 0 0 64h64a32 32 0 0 0 0-64z"
                        ></path>
                      </svg>
                    </div>
                  </div>


                  {/* <div className="relative">
                    <input
                      placeholder="Confirm Password"
                      type={showPassword ? "text" : "password"}
                      {...register("confirmPassword", registerOptions.password)}
                      className="text-sm  px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-400"
                    />
                    <p className="px-2 text-red-800">
                      {errors?.password && errors.password.message}
                    </p>
                  </div> */}
                
                <div className="grid grid-cols-2 gap-x-4 ">
                  <div>
                    <input
                      className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-green-400"
                      type="Firstname"
                      placeholder="Firstname"
                      {...register("firstname", registerOptions.firstname)}
                    />
                    <p className="px-2 text-red-800">
                      {errors?.firstname && errors.firstname.message}
                    </p>
                  </div>

                  <div>
                    <input
                      className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-green-400"
                      type="Lastname"
                      placeholder="Lastname"
                      {...register("lastname", registerOptions.lastname)}
                    />
                    <p className="px-2 text-red-800">
                      {errors?.lastname && errors.lastname.message}
                    </p>
                  </div>
                </div>

                  <div>
                    <button className="w-full flex justify-center items-center bg-green-700 hover:bg-green-600 text-white px-4 py-3 rounded-lg focus:outline-none">
                      <span className="mr-2">Sign Up</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 11h3v6h10v-6h3l-8-8-8 8zm3-7h4v5h2V4h4l-6-6-6 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-sm text-center">
                    <a href="" className="text-green-700 hover:text-green-400">
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default register;
