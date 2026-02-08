import React from "react";
import Home from "./home/Home.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses.jsx";
import Signup from "./component/Signup.jsx";
import Contact from "./component/Contact.jsx";
import Buy from "./component/Buy.jsx";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider.jsx";
import About from "./component/About";

const App = () => {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />

        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />

        <Route path="/contact" element={<Contact />} />

        {/* ✅ BUY ROUTE (IMPORTANT) */}
        <Route path="/buy/:id" element={<Buy />} />

        <Route path="/about" element={<About />} />

      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
