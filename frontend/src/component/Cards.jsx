import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <div className="p-3 flex justify-center">
      <div
        className="
          card w-full max-w-sm
          bg-base-100 dark:bg-slate-900 dark:text-white
          shadow-md border
          transition-all duration-300
          md:hover:scale-105 md:hover:bg-pink-100
        "
      >
        {/* IMAGE */}
        <figure className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"              // 🔥 IMPORTANT (scroll smooth)
            decoding="async"            // 🔥 browser optimization
            className="w-full h-full object-cover"
          />
        </figure>

        {/* BODY */}
        <div className="card-body p-4">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary text-xs">NEW</div>
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.title}
          </p>

          <div className="card-actions justify-between items-center mt-2">
            <div className="badge badge-outline text-sm">
              ₹{item.price}
            </div>

            <Link
              to={`/buy/${item._id}`}
              className="
                px-3 py-1 rounded-full border text-sm
                hover:bg-orange-500 hover:text-white
                transition
              "
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
