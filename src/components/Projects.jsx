import React from "react";
import "../style.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>MY PROJECTS</h1>
      <div className="cards-container">
        <div className="card">
          <img
            src="/shreya-portfolio/images/movies.webp"
            alt="Movie Search App"
            className="card-image"
          />
          <div className="card-content">
            <h2>Movie Search App</h2>
            <p>
              A movie search application that allows users to search and explore
              movie information using an interactive and modern UI. Built with
              React.
            </p>
            <div className="card-links">
              <a
                href="https://github.com/shreyajshetty/Film-react-cra"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Source
              </a>
              <a
                href="https://film-nextjs.vercel.app/"
                target="_blank"
                className="view-link"
              >
                View
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="/shreya-portfolio/images/book-review.jpeg"
            alt="Book Review Site"
            className="card-image"
          />
          <div className="card-content">
            <h2>Book Review Site</h2>
            <p>
              A book review website that allows users to explore, review, and
              share their favorite books.
            </p>
            <div className="card-links">
              <a
                href="https://github.com/shreyajshetty/book-review"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Source
              </a>
              <a
                href="https://shreyajshetty.github.io/book-review/"
                target="_blank"
                className="view-link"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/shreya-portfolio/images/calorie-counter.webp"
            alt="Calorie Counter"
            className="card-image"
          />
          <div className="card-content">
            <h2>Calorie Counter</h2>
            <p>
              A simple app to track daily calorie intake by logging meals and
              their calorie values. Helps users stay on top of their fitness
              goals with a clean and responsive design.
            </p>
            <div className="card-links">
              <a
                href="https://github.com/shreyajshetty/calorie-counter"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Source
              </a>
              <a
                href="https://shreyajshetty.github.io/calorie-counter/"
                target="_blank"
                className="view-link"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            src="/shreya-portfolio/images/products-sale.jpeg"
            alt="Products Sale Tracker"
            className="card-image"
          />
          <div className="card-content">
            <h2>Products Sale Tracker</h2>
            <p>
              A streamlined web application for managing and tracking product
              sales and orders with user authentication and a responsive design
            </p>
            <div className="card-links">
              <a
                href="https://github.com/shreyajshetty/products-sale-react"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Source
              </a>
              <a
                href="https://shreyajshetty.github.io/products-sale-react/"
                className="view-link"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
