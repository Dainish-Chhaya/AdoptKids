import React, { useState } from "react";

import "../styles/HomePage.css";
import Services from "../Assets/Services.jpg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Testimonials.css";
import emailjs from "emailjs-com";
import ContactUsImageHomepage from "../images/contactus.gif";
import JoinOurTeamImage from "../images/JoinOurTeam.png";

import BackgroundVideo from "./BackgroundVideo";
const Homepage = () => {
  const videoUrl = "/BabyVideo.mp4 ";
  const handleLinkClick = (value: number) => {
    localStorage.setItem("serviceValue", value.toString());
  };
  const [testimonials, setTestimonials] = useState([
    {
      name: "Aryan & Krupa",
      content: `We are forever grateful to AdoptKids for helping us complete
    our family. The entire team demonstrated unmatched compassion,
    professionalism, and dedication throughout the adoption
    process. From the initial consultation to the finalization of
    our adoption, they provided unwavering support and guidance.
    Our journey to parenthood was made smoother and more joyful
    because of their expertise. Today, we can't imagine our lives
    without our precious little one, and it's all thanks to the
    incredible work of AdoptKids.`,
    },
    {
      name: "Piyush & Riya",
      content: `AdoptKids holds a special place in our hearts as they played
    a pivotal role in bringing our family together. The staff went
    above and beyond to make the adoption process seamless and
    emotionally supportive. Their commitment to the well-being of
    the children and the happiness of the adopting families is
    truly commendable. We felt cared for and informed at every
    step, and now, with our little one in our arms, we couldn't be
    happier. Thank you, AdoptKids, for making our dreams of
    parenthood come true.`,
    },
    {
      name: "Dainish & Sakshi",
      content: `As we reflect on our adoption journey, we can't help but
    express our gratitude to AdoptKids. Their team exhibited
    unparalleled professionalism, patience, and empathy, making
    the entire process a positive and empowering experience. From
    the educational resources they provided to the emotional
    support during the waiting period. Today, we are a complete
    and happy family, and we owe it all to the exceptional work of
    AdoptKids. Thank you, AdoptKids, for making our dreams of
    parenthood come true.`,
    },
    {
      name: "Gaurav & Prats",
      content: `AdoptKids is more than just an agency; they are a beacon of
    hope and love for families like ours. The expertise and
    genuine care displayed by the entire team were instrumental in
    the success of our adoption journey. The thorough screening
    process and continuous support gave us confidence and
    reassurance. Our family is now blessed with a beautiful
    addition, and we are eternally grateful to AdoptKids for
    making our dreams of parenting a reality. Thank you,
    AdoptKids, for making our dreams of parenthood come true.`,
    },
    {
      name: "Dhruvil & Anushka",
      content: `Our heartfelt thanks to AdoptKids for their outstanding
    commitment. The entire process, from the initial consultation
    to the placement of our child, was handled with
    professionalism, transparency, and a genuine concern for all
    involved. AdoptKids not only facilitated the legal and
    logistical aspects but also provided emotional support and
    resources to help us navigate the complexities of adoption. We
    highly recommend AdoptKids to anyone considering adoption –
    they truly make dreams come true.`,
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [formData, setFormData] = useState({
    name: "",
    user_email: "",
    message: "",
  });

  const emailSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_dl11pm8",
        "template_uwppzfg",
        event.currentTarget,
        "zF8WdUGlEP6DxupYT"
      )
      .then((res) => {
        console.log(res);
        // Clear form fields
        setFormData({
          name: "",
          user_email: "",
          message: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      {/* <hr /> */}
      <div className="homepage">
        <div className="OurMissionHomePage">
          <BackgroundVideo videoUrl={videoUrl} />
          <div className="AboutUsHomePage">
            <h2 className="OurMission">Our Mission</h2>
            <p>
              At AdoptKids, our mission is to be the guiding light for children
              in need, forging connections that transcend borders and unite
              compassionate hearts in the pursuit of a brighter future. We are
              more than an adoption facilitator; we are advocates for every
              child's inherent right to love, belonging, and the stability of a
              forever family. Our commitment goes beyond the mechanics of
              adoption; it is a heartfelt dedication to nurturing dreams and
              creating pathways to family for every child waiting in orphanages
              and group homes. Instead, we invite those with generous hearts to
              explore our "Ways to Help" section, where opportunities abound to
              make a meaningful difference in the lives of vulnerable children.
              Together, we embark on a transformative journey where the power of
              connection and compassion changes lives, one adoption at a time.
            </p>
          </div>
        </div>
        <div className="ServicesHomePageSection">
          <div>
            <h2>Our Services</h2>
          </div>

          <div className="ServicesHomePage">
            <div className="ServicesCardHomePage">
              <img src={Services} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Adopt a Child</h5>
                <p className="card-text">
                  The beauty of adoption lies in the love that grows within a
                  family, transcending biology and uniting hearts.
                </p>
                <Link
                  to="/Login"
                  className="btn btn-primary"
                  onClick={() => handleLinkClick(1)}
                >
                  Start the Adoption Process
                </Link>
              </div>
            </div>

            <div className="ServicesCardHomePage">
              <img src={Services} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Foster a Child</h5>
                <p className="card-text">
                  Fostering a child is not about perfect people, but about
                  ordinary people making an extraordinary difference..
                </p>
                <Link
                  to="/Login"
                  className="btn btn-primary"
                  onClick={() => handleLinkClick(2)}
                >
                  Foster a Child
                </Link>
              </div>
            </div>

            <div className="ServicesCardHomePage">
              <img src={Services} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Post Adoption</h5>
                <p className="card-text">
                  Family is not defined by our genes; it is built and maintained
                  through love, commitment, and the choice to stand together.
                </p>
                <Link
                  to="/Login"
                  className="btn btn-primary"
                  onClick={() => handleLinkClick(3)}
                >
                  Post Adoption Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="TestimonialsHomePage">
          <h2 className="font-60">What Clients Say About Us</h2>

          <div className="flexx">
            <Slider {...settings} className="Cards">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card text-white bg-dark mb-3 flexCards"
                >
                  <div className="card-header">{testimonial.name}</div>
                  <div className="card-body background-img">
                    <h5 className="card-title">``</h5>
                    <p className="card-text">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="ContactUsHomePage">
          <h1>
            <center>Contact Us</center>
          </h1>
          <hr></hr>
          <div className="flexContactUsHomePage">
            <div>
              <form onSubmit={emailSend}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                />

                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  value={formData.user_email}
                  onChange={handleInputChange}
                />

                <label>Message</label>
                <textarea
                  name="message"
                  className="form-control ContactUsHomePageTextArea"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <input
                  type="submit"
                  value="Send"
                  className="ContactUsHomePagebutton"
                />
              </form>
            </div>
            <div className="ContactUsImageHomepage">
              <img
                src={ContactUsImageHomepage}
                alt="ContactUsImageHomepage.png"
              />
            </div>
          </div>
        </div>

        <div className="JoinTeamHomePageSection">
          <h2>Come Work With Us</h2>
          <hr></hr>
          <div className="text-jointeam-homepage">
            <p className="color-white">
              At AdoptKids, we believe in the transformative power of family and
              the profound impact it has on the lives of children. If you are
              passionate about making a difference and are dedicated to creating
              brighter futures for children in need, we invite you to join our
              team.
            </p>
            <h3>Why Join AdoptKids?</h3>
            <p className="color-white">
              1. Making a Real Difference: Be part of an organization that is
              committed to creating loving and permanent families for children.
              Your work will directly contribute to changing lives and building
              strong, supportive communities.
            </p>
            <p className="color-white">
              2. Collaborative Environment: Join a team of professionals who are
              not only experts in their fields but are also driven by a shared
              mission. We foster a collaborative and inclusive work environment
              where ideas are valued, and innovation is encouraged.
            </p>
            <p className="color-white">
              3. Professional Growth: AdoptKids is dedicated to the continuous
              growth and development of its team members. We provide
              opportunities for training, skill enhancement, and career
              advancement, ensuring that you can reach your full potential.
            </p>
            <p className="color-white">
              4. Impactful Work: Whether you are in social work, administration,
              legal services, or technology, your role at AdoptKids will
              contribute to the success of our mission. Every team member plays
              a crucial part in the adoption process and the well-being of
              children.
            </p>
            <p>
              <Link to="/JoinOurTeam">Apply Now</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
