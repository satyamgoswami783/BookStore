import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://bookstore-jarv.onrender.com/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_2").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error" + err.response.data.message);
        }
      });
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box relative dark:bg-slate-800 dark:text-white">
        {/* Close button */}
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => document.getElementById("my_modal_2").close()}
          type="button"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg mb-4">Login</h3>

        {/* ✅ SINGLE FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label>Email</label>
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
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-orange-400"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Not registered?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </dialog>
  );
};

export default Login;
