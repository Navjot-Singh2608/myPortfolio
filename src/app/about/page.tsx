import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Navjot Singh <span>Full Stack Developer</span>
                  </h2>
                  <p>
                    I am a full stack developer with over 8 plus years of
                    experience delivering innovative and efficient web
                    applications. My expertise includes technologies such as
                    JAVASCRIPT | NODEJS | JAVA | Angular | REACT | NODEJS |
                    MONGODB | MYSQL and a strong understanding of software
                    development life cycle, security and scalability.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.navjotsinghh.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>navjot2608@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B.tech | Post-Graduation</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+4372548678</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Toronto,Ontario,Canada</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a href="/imgs/resume.pdf" download className="btn">
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Angular</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Java</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>GraphQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>MongoDb</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {/* Timeline Item for Postgraduate Degree */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            PostGraduate Degree in Web Design and Development
                          </h4>
                          <p className="timeline-text">
                            <strong>Institution:</strong> Conestoga College,
                            Kitchener, Canada
                            <br />
                            <strong>Achievements:</strong>
                            <ul>
                              <li>
                                Mastered technologies including Node.js,
                                Angular, Java,Data Structure, Spring Boot,
                              </li>
                            </ul>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2011 to 2015
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor of Technology in Computer Science (Guru
                            Tegh Bahadur Institute of Technology, New Delhi,
                            India)
                          </h4>
                          <p className="timeline-text">
                            Key Competencies and Skills:
                            <ul>
                              <li>
                                <strong>Proficient Programming Skills:</strong>{" "}
                                Mastery in Java, Python, and C++, crucial for
                                software development and problem-solving.
                              </li>
                              <li>
                                <strong>
                                  Understanding of Algorithms and Data
                                  Structures:
                                </strong>{" "}
                                Strong foundation in optimizing solutions and
                                computational efficiency.
                              </li>
                            </ul>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Nov 2023 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Senior Full Stack Developer
                            <br />
                            Royal Bank of Canada(Toronto,Canada)
                          </h4>
                          <div className="timeline-text">
                            <p>
                              Tech Stack:
                              <br />
                              Angular· React · Node.js · Java · TypeScript ·
                              Javascript · Dataiku · PowerBI · Python
                            </p>
                            <p>
                              • Developed and maintained web applications
                              utilizing Angular, JavaScript, TypeScript, Java,
                              HTML5, and CSS3, ensuring responsive and
                              user-friendly design.
                              <br /> • Created and integrated D3 graphs for
                              dynamic and interactive data visualization. <br />
                              • Developed and maintained web reports using Power
                              BI.
                              {/* Remaining text goes here */}
                            </p>
                          </div>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2021 to Nov
                            2023
                          </h6>
                          <h4 className="timeline-title">
                            Software Developer
                            <br />
                            Cence Power (formerly Argentum) (Markham,Ontario,
                            Canada)
                          </h4>
                          <div className="timeline-text">
                            <p>
                              Tech Stack:
                              <br />
                              Skills: React · Typescript · AngularJS · Node.js ·
                              MongoDB · Express.js
                            </p>
                            <p>
                              • Developed and maintained IoT applications
                              utilizing React, Angular, TypeScript, Apollo,
                              GraphQL, Node.js, and MongoDB, ensuring efficient
                              and scalable solutions.
                              <br /> • Leveraged various cloud services,
                              including AWS S3, SNS, SES, Lambda functions, AWS
                              Timestream, and DynamoDB, to enhance application
                              functionality and performance.
                              {/* Remaining text goes here */}
                            </p>
                          </div>
                          <h4></h4> <p className="timeline-text"></p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> April 2021 to Nov
                            2023
                          </h6>
                          <h4 className="timeline-title">
                            Software Developer
                            <br />
                            Cence Power (formerly Argentum) (Markham,Ontario,
                            Canada)
                          </h4>
                          <div className="timeline-text">
                            <p>
                              Tech Stack:
                              <br />
                              Skills: React · Typescript · AngularJS · Node.js ·
                              MongoDB · Express.js
                            </p>
                            <p>
                              • Developed and maintained IoT applications
                              utilizing React, Angular, TypeScript, Apollo,
                              GraphQL, Node.js, and MongoDB, ensuring efficient
                              and scalable solutions.
                              <br /> • Leveraged various cloud services,
                              including AWS S3, SNS, SES, Lambda functions, AWS
                              Timestream, and DynamoDB, to enhance application
                              functionality and performance.
                              {/* Remaining text goes here */}
                            </p>
                          </div>
                          <h4></h4> <p className="timeline-text"></p>
                        </div>

                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
