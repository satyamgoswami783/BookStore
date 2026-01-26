import React from 'react'
import books from '../../public/Banner.png'

const Bannner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 md:mt-36 my-10 ">
        <div className=" order-2 flex flex-col md:flex-row items-center  ">

          {/* LEFT SECTION */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl font-bold mb-4">
              Hello, welcome here to learn something{" "}
              <span className="text-orange-500">new everyday!!!</span>
            </h1>

            <p className="mb-10 text-gray-600 ">
             Discover a world of stories, ideas, and imagination at our bookstore. Whether you’re searching for knowledge, inspiration, or your next favorite read, our collection is curated to turn every page into a memorable journey.
            </p>

            {/* EMAIL INPUT */}
           
            <label className="input input-bordered flex items-center gap-2 border mt-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 "
              >
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11ZM2 5.697V4.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1.197L8 9.28 2 5.697Zm0 1.466V11.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7.163l-5.74 3.44a.5.5 0 0 1-.52 0L2 7.163Z"
                />
              </svg>

              <input
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>
           

            <button className="btn btn-secondary mt-4">
              Get Started
            </button>
          </div>

          {/* RIGHT SECTION (IMAGE) */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 order-1">
            <img
              src={books}   // 👉 image path change kar sakta hai
              alt="Banner"
              className="w-92 h-92"
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Bannner
