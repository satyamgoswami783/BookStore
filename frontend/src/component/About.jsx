import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24 px-6 md:px-20">
        <h1 className="text-3xl font-bold mb-6 text-orange-500">
          About BookStore
        </h1>

        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">BookStore</span>, an online
          platform designed for learners and readers who want to explore books
          and courses easily.
        </p>

        <p className="text-lg mb-4">
          Our platform provides both <span className="font-semibold">free</span>{" "}
          and <span className="font-semibold">paid</span> courses with a clean
          and user-friendly interface.
        </p>

        <p className="text-lg mb-4">
          This project is built using modern web technologies like React,
          Node.js, Express, and MongoDB to ensure performance and scalability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Technologies Used
        </h2>
        <ul className="list-disc ml-6 text-lg">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>JWT Authentication</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Our Mission
        </h2>
        <p className="text-lg">
          Our mission is to make learning accessible, simple, and enjoyable for
          everyone.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
