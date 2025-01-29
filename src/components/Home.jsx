import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <h1 className="text-4xl font-bold">Hi, I'm Shreya J Shetty</h1>
    <p className="mt-4 text-lg">Frontend Developer | Passionate Learner</p>
    <Link
      to="/projects"
      className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
    >
      View My Work
    </Link>
  </section>
);

export default Home;
