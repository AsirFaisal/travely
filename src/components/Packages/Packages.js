import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cover from "../../images/allevents.JPG";

const Packages = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    fetch("https://travely2021.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <div>
      <img className="img-fluid" src={cover} alt="allevents" />
      <h1 className="mt-5 mb-5 text-center">Our Upcoming Events</h1>
      <small className="mt-5 mb-5 text-primary">
        Check our promotional tours
      </small>
      <div className="row">
        {tours.map((tour) => (
          <div key={tour.id} className="col-12 col-lg-4">
            <Card style={{ width: "30rem" }}>
              <Card.Img className="img-fluid" variant="top" src={tour.img} />
              <Card.Body>
                <Card.Title>{tour.name}</Card.Title>
                <Card.Text>{tour.desc}</Card.Text>
                <Link to={`/tours/${tour.id}`}>
                  <button className="btn btn-warning">Book Now</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
