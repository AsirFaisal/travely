import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";

import banner from "../../images/home_cover.JPG";
import about from "../../images/abt.JPG";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [event, setevents] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setevents(data));
  }, []);
  const event1 = event.slice(3);
  return (
    <div>
      <div>
        <h1 className="mt-5 text-center">
          Life Long Memory just a few{" "}
          <span className="text-primary">Steps away</span>
        </h1>
        <small className="text-danger fw-bold">Our Journey ,your dreams</small>
      </div>
      <img className="img-fluid" src={banner} alt="cover-banner"></img>
      <h3 className="mt-5 mb-5 text-primary text-center">
        Check our Upcoming Events
      </h3>
      <div className="row mt-5 mb-5 ms-5 mx-5">
        {event1.map((e) => (
          <div className="col-12 col-lg-4">
            <Card style={{ width: "30rem" }}>
              <Card.Img className="img-fluid" variant="top" src={e.img} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>{e.desc}</Card.Text>
                <Link to={`/tours/${e.id}`}>
                  <button className="btn btn-warning">Book Now</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
        <div className="row">
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={about} alt="about"></img>
          </div>
          <div className="col-12 col-lg-6 mt-5">
            <h2 className="mb-5 text-primary text-center">About us</h2>
            <h2 className="text-center">Get ready for real time adventure</h2>
            <p className="mt-5 mb-5 text-center">
              Let’s start your journey with us, your dream will come true. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam quis nostrud exercitation.
            </p>
            <Button className="bg-info text-center align-center">
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
      <div className="lin-bg text-white h-100">
        <h1 className="text-center">What Customers Say about Us</h1>
        <p className="text-center">
          5 star ratings and one extra for the great hospitality."
        </p>
        <blockquote className="text-center">by John Naves</blockquote>
        <br></br>
        <p className="text-center">
          "I found it beyond expectations and 100% value for money"
        </p>
        <blockquote className="text-center">by Hamish Brat</blockquote>
        <br></br>
        <p className="text-center">
          "This is the best travel package I found online and after travellign
          with them it was like my dream come true"
        </p>
        <blockquote className="text-center">by Jacob Oram</blockquote>
        <br></br>
      </div>
    </div>
  );
};

export default Home;
