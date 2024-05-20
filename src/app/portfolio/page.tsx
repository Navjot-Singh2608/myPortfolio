"use client";
import { useState } from "react";
import "./portfolio.css";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "react", "angular", "java", "python", "cloud"];

  const projects = [
    {
      id: 1,
      category: "react",
      imgSrc: "/imgs/portfolio/shopCart.jpg",
      title: "shopCart",
      githubUrl: "https://github.com/Navjot-Singh2608/shopCart",
      liveUrl: "https://shop-cart-vvwj.vercel.app/",
      description: "",
      techStack: ["React", "Typescript"],
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="row scale-50">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="portfolio-item padd-15"
                data-category={project.category}
              >
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={project.imgSrc} alt={project.title} />
                  </div>
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    {/* <p>{project.description}</p> */}
                    <div className="portfolio-info-hover">
                      <div className="tech-stack">
                        {project.techStack.map((tech, index) => (
                          <span key={index} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="project-view-links-icons">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View on GitHub"
                          className="icon-left"
                        >
                          <i className="fa fa-github fa-2x"></i>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Live Demo"
                          className="icon-right"
                        >
                          <i className="fa fa-desktop fa-2x"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
