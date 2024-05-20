"use client";
import { useState } from "react";
import shopCartImage from "/public/imgs/portfolio/shopCart.jpg";

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      category: "react",
      imgSrc: shopCartImage,
      title: "React Application",
      technologies: "React, TypeScript",
      githubLink: "https://github.com/yourusername/react-project",
      liveLink: "https://shop-cart-vvwj.vercel.app/",
    },
    {
      id: 2,
      category: "angular",
      imgSrc: "/imgs/portfolio/2.jpg",
      title: "Angular Project",
      technologies: "Angular, TypeScript",
      githubLink: "https://github.com/yourusername/angular-project",
      liveLink: "https://your-live-project-link.com",
    },
    {
      id: 3,
      category: "java",
      imgSrc: "/imgs/portfolio/3.jpg",
      title: "Java Project",
      technologies: "Java, Spring Boot",
      githubLink: "https://github.com/yourusername/java-project",
      liveLink: "https://your-live-project-link.com",
    },
    {
      id: 4,
      category: "python",
      imgSrc: "/imgs/portfolio/4.jpg",
      title: "Python Project",
      technologies: "Python, Flask",
      githubLink: "https://github.com/yourusername/python-project",
      liveLink: "https://your-live-project-link.com",
    },
    {
      id: 5,
      category: "cloud",
      imgSrc: "/imgs/portfolio/5.jpg",
      title: "Cloud Project",
      technologies: "AWS, Docker",
      githubLink: "https://github.com/yourusername/cloud-project",
      liveLink: "https://your-live-project-link.com",
    },
    {
      id: 6,
      category: "react",
      imgSrc: "/imgs/portfolio/6.jpg",
      title: "Another React Project",
      technologies: "React, Redux",
      githubLink: "https://github.com/yourusername/another-react-project",
      liveLink: "https://your-live-project-link.com",
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
              <button
                type="button"
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => setActiveCategory("all")}
              >
                All
              </button>
              <button
                type="button"
                className={activeCategory === "react" ? "active" : ""}
                onClick={() => setActiveCategory("react")}
              >
                React
              </button>
              <button
                type="button"
                className={activeCategory === "angular" ? "active" : ""}
                onClick={() => setActiveCategory("angular")}
              >
                Angular
              </button>
              <button
                type="button"
                className={activeCategory === "java" ? "active" : ""}
                onClick={() => setActiveCategory("java")}
              >
                Java
              </button>
              <button
                type="button"
                className={activeCategory === "python" ? "active" : ""}
                onClick={() => setActiveCategory("python")}
              >
                Python
              </button>
              <button
                type="button"
                className={activeCategory === "cloud" ? "active" : ""}
                onClick={() => setActiveCategory("cloud")}
              >
                Cloud Projects
              </button>
            </div>
          </div>
          <div className="row">
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
                    {project.technologies.split(", ").map((tech, index) => (
                      <button key={index} className="project-tech-button">
                        {tech}
                      </button>
                    ))}

                    <div className="project-view-links">
                      <div className="icon">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="icon">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-globe" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div className="icon">
                        <i className="fa fa-search" />
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
