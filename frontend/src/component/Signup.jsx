import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ email Banner se aayega
  const emailFromBanner = location.state?.email || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: emailFromBanner, // ✅ auto-fill
    },
  });

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );

      toast.success("Signup Successfully");

      // ✅ Save user
      localStorage.setItem("Users", JSON.stringify(res.data.user));

      // ✅ Redirect properly
      navigate("/");
      window.location.reload();
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Signup failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <div className="w-[360px] bg-white p-6 rounded-lg shadow-lg relative">

        {/* Close */}
        <Link to="/" className="absolute right-3 top-3 text-xl">
          ✕
        </Link>

        <h3 className="text-2xl font-bold text-center mb-5">Signup</h3>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mb-3">
            <label>Name</label>
            <input
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-400"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-orange-400"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          <button className="w-full bg-orange-500 text-white py-2 rounded">
            Signup
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              document.getElementById("my_modal_2")?.showModal();
            }}
          >
            Login
          </span>
        </p>

        <Login />
      </div>
    </div>
  );
};

export default Signup;
