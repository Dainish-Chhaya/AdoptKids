// AboutUsPage.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AboutUsPage.css";
import Piyush from "../Assets/ENCP_Piyush.jpg";
import Aryan from "../Assets/Aryan.jpg";
import Dainish from "../Assets/Dainish.jpg";
import Nidhi from "../Assets/Nidhi.jpg";

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page container-about">
      <header>
        <h1 className="about-us-header">About Us</h1>
      </header>

      <section className="mission-section">
        <h2 className="mission-header">Our Mission</h2>
        <p className="mission-content">
          At AdoptKids, our mission is to be the guiding light for children in
          need, forging connections that transcend borders and unite
          compassionate hearts in the pursuit of a brighter future. We are more
          than an adoption facilitator; we are advocates for every child's
          inherent right to love, belonging, and the stability of a forever
          family. We stand as a central hub, weaving together compassionate
          families, dedicated adoption professionals, humanitarian
          organizations, and orphan-care missions into a seamless network of
          support. Our commitment goes beyond the mechanics of adoption; it is a
          heartfelt dedication to nurturing dreams and creating pathways to
          family for every child waiting in orphanages and group homes.
          Operating on a unique principle, we do not accept donations from
          families. Instead, we invite those with generous hearts to explore our
          "Ways to Help" section, where opportunities abound to make a
          meaningful difference in the lives of vulnerable children. Together,
          we embark on a transformative journey where the power of connection
          and compassion changes lives, one adoption at a time. At AdoptKids, we
          envision a world where every child experiences the warmth of love, the
          security of belonging, and the promise of a brighter tomorrow. Join us
          as we strive to make the world a brighter place, where love finds its
          home in the hearts of those willing to share it. Welcome to AdoptKids
          – where hope meets home, and together, we build a legacy of love that
          lasts a lifetime.
        </p>
      </section>

      <section className="team-section">
        <h2 className="ourteam-header">Our Team</h2>
        
        <div className="card-deck">
          {/* Team Member 1 */}
          <div className="card1">
            <img src= {Piyush} className="card-img-top" alt="Team Member 1" />
            <div className="card-body">
              <h5 className="card-title">Piyush Chhoriya</h5>
              <p className="card-text">
                Master's in Software Engineering Systems
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card1">
            <img src={Dainish} className="card-img-top" alt="Team Member 2" />
            <div className="card-body1">
              <h5 className="card-title">Dainish Chhaya</h5>
              <p className="card-text">
                Master's in Software Engineering Systems
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card1">
            <img
              src={Nidhi}
              className="card-img-top"
              alt="Team Member 3"
            />
            <div className="card-body">
              <h5 className="card-title">Nidhi Patel</h5>
              <p className="card-text">
                Master's in Software Engineering Systems
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="card1">
            <img src={Aryan} className="card-img-top" alt="Team Member 4" />
            <div className="card-body">
              <h5 className="card-title">Aryan Sheth</h5>
              <p className="card-text">Master's in Information Systems</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
