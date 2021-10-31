import React from "react";
import img1 from "../../images/about_us.JPG";
import img2 from "../../images/accordion.JPG";
import about from "../../images/abt.JPG";
import { Accordion, Button } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <img classname="img-fluid" src={img1} alt="abt"></img>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img className="img-fluid" src={about} alt="about"></img>
        </div>
        <div className="col-12 col-lg-6 mt-5">
          <h2 className="mb-5 text-primary">About us</h2>
          <h2>Get ready for real time adventure</h2>
          <p className="mt-5 mb-5 ">
            Let’s start your journey with us, your dream will come true. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation.
          </p>
          <Button className="bg-info">Explore Destinations</Button>
        </div>
      </div>

      <h1 className="text-info text-center">FAQ</h1>
      <div className="row">
        <div className="col-12 col-lg-4 mt-5 ms-5">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Booking Policy</Accordion.Header>
              <Accordion.Body>
                All our booking policy says you must request refund for 72 hours
                before the tour
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Extra booking</Accordion.Header>
              <Accordion.Body>
                For extra booking you must pay the regular fees.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Change of Destinations</Accordion.Header>
              <Accordion.Body>
                For change of Destinations you cant ask for refunds.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Add ons</Accordion.Header>
              <Accordion.Body>
                All add ons to your trip will be of own cost.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-12 col-lg-6">
          <img className="img-fluid" src={img2} alt="about"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
