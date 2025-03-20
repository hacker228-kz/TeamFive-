import React from "react";
import Agriculture from "./Agriculture";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Video from "./Video";



const About = () => {
  return (
    <div  id='about'>
      <Agriculture />
      <Video />
      <Testimonial />
      <Team />
    </div>
  );
};

export default About;