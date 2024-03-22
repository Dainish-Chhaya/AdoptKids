import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Testimonials.css";
import TestimonialsImage from "../images/Testimonials-GIF.gif";

const Testimonials: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;

    if (name && content) {
      setTestimonials((prevTestimonials) => [
        ...prevTestimonials,
        { name, content },
      ]);

      e.currentTarget.reset();
    }
  };

  return (
    <>
      <div className="Testimonials_Container">
        <h2 className="font-60">What Clients Say About Us</h2>
        <div className="image">
          <img src={TestimonialsImage} alt="Testimonials.png" />
        </div>
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
        <h2 className="font-60 write-your-own-testimonial-margin">
          Write Your Own Testimonial
        </h2>
        {/* Form for adding new testimonials */}
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="name" className="padding-top">
              Name:
            </label> */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            {/* <label htmlFor="content">Testimonial:</label> */}
            <textarea
              id="content"
              name="content"
              placeholder="Content"
              rows={4}
              required
            />
          </div>
          <button type="submit">Submit Testimonial</button>
        </form>
      </div>
    </>
  );
};

export default Testimonials;
