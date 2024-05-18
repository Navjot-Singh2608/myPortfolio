'use client'
import { useState } from 'react'

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    // Example projects, you'll need to update these according to your actual projects' categories
    {
      id: 1,
      category: 'react',
      imgSrc: '/imgs/portfolio/1.jpg',
      title: 'React Project'
    },
    {
      id: 2,
      category: 'angular',
      imgSrc: '/imgs/portfolio/2.jpg',
      title: 'Angular Project'
    },
    {
      id: 3,
      category: 'java',
      imgSrc: '/imgs/portfolio/3.jpg',
      title: 'Java Project'
    },
    {
      id: 4,
      category: 'python',
      imgSrc: '/imgs/portfolio/4.jpg',
      title: 'Python Project'
    },
    {
      id: 5,
      category: 'cloud',
      imgSrc: '/imgs/portfolio/5.jpg',
      title: 'Cloud Project'
    },
    {
      id: 6,
      category: 'react',
      imgSrc: '/imgs/portfolio/6.jpg',
      title: 'Another React Project'
    }
  ]

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  )

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
                className={activeCategory === 'all' ? 'active' : ''}
                onClick={() => setActiveCategory('all')}
              >
                All
              </button>
              <button
                type="button"
                className={activeCategory === 'react' ? 'active' : ''}
                onClick={() => setActiveCategory('react')}
              >
                React
              </button>
              <button
                type="button"
                className={activeCategory === 'angular' ? 'active' : ''}
                onClick={() => setActiveCategory('angular')}
              >
                Angular
              </button>
              <button
                type="button"
                className={activeCategory === 'java' ? 'active' : ''}
                onClick={() => setActiveCategory('java')}
              >
                Java
              </button>
              <button
                type="button"
                className={activeCategory === 'python' ? 'active' : ''}
                onClick={() => setActiveCategory('python')}
              >
                Python
              </button>
              <button
                type="button"
                className={activeCategory === 'cloud' ? 'active' : ''}
                onClick={() => setActiveCategory('cloud')}
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
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
