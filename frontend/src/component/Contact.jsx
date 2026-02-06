import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contect = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      emailjs.send(
  "service_3ungfbg",
  "template_c6b9z38",
  {
    name: data.name,
    email: data.email,
    message: data.message,
  },
  "YAHAN_REAL_PUBLIC_KEY_PASTE_KAR" // ❗
)

      .then(() => {
        alert("Message sent successfully ✅");
        reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 dark:bg-slate-900 dark:text-white">
      <div className="relative">
        <div className="absolute inset-0 rounded-xl bg-pink-300 blur-2xl opacity-50"></div>

        <div className="relative w-[360px] bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl">
          <Link to="/" className="absolute right-3 top-3 text-xl">✕</Link>

          <h3 className="text-2xl font-bold text-center mb-5">
            Contact Us
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="mb-3">
              <label>Name</label>
              <input
                className="w-full border px-3 py-2 rounded dark:bg-slate-700"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded dark:bg-slate-700"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-3">
              <label>Message</label>
              <textarea
                className="w-full border px-3 py-2 rounded dark:bg-slate-700"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">Message is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contect;
