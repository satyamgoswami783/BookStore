import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <div className="w-[360px] bg-white p-6 rounded-lg shadow-lg relative">

        {/* Close */}
        <Link to="/" className="absolute right-3 top-3 text-xl">
          ✕
        </Link>

        <h3 className="text-2xl font-bold text-center mb-5">Signup</h3>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-orange-400"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Signup
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              const modal = document.getElementById("my_modal_2");
              if (modal) modal.showModal();
            }}
          >
            Login
          </button>
        </p>

        {/* Login modal */}
        <Login />
      </div>
    </div>
  );
};

export default Signup;
