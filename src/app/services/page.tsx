import type { NextPage } from "next";
import { FaJava } from "react-icons/fa";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Certifications</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: Logo Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-cloud"></i>
                </div>
                <h4>AWS Certified Cloud Practitioner</h4>
                <p>
                  In passing the test, I demonstrated proficiency in fundamental
                  AWS services and their application, essential for AWS-centric
                  projects.I acquired fundamental knowledge of AWS services and
                  their application in cloud computing. This includes
                  identifying essential services and understanding their role in
                  setting up AWS-focused projects.
                </p>
              </div>
            </div>
            {/* Service Item 1 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
