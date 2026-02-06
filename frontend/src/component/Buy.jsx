import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Buy = () => {
  const { id } = useParams();

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book/${id}`);
        setBook(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
        setError("Course load nahi ho pa raha");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 text-center text-xl">Loading...</div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 text-center text-red-500">
          {error}
        </div>
        <Footer />
      </>
    );
  }

  if (!book) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 text-center mt-20">Course not found</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24 flex justify-center items-start mt-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <img
            src={`/${book.image}`}
            className="h-56 w-full object-cover"
            alt="image"
          />

          <div className="card-body">
            <h2 className="card-title">{book.name}</h2>
            <p>{book.title}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-orange-500">
                ₹{book.price}
              </span>

              <button className="btn btn-warning text-white">
                Proceed to Buy
              </button>
            </div>

            <Link
              to="/course"
              className="mt-4 text-center text-sm text-blue-500"
            >
              ← Back to Courses
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Buy;
