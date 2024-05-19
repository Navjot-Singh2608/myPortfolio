export default async function Home() {
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/profilePic.jpeg"
              alt=" Profile"
              className="shadow-dark"
            />
            <h1>Navjot Singh</h1>
            <p>Senior Full Stack Developer</p>
            <div className="social-links">
              <a href="https://github.com/Navjot-Singh2608" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/navjot-singh-639911a9/"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://leetcode.com/u/navjotsingh1123/" target="_blank">
                <img
                  src="/imgs/icons/leetcode.svg"
                  alt="Leetcode"
                  className="shadow-dark"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
