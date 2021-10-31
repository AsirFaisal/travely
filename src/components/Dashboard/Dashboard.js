import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

const Dashboard = () => {
  const [order, setOrders] = useState([]);
  const package_Ref = useRef();
  const priceRef = useRef();
  const LocationRef = useRef();
  const DescriptionRef = useRef();
  const imgRef = useRef();
  const u_idRef = useRef();
  useEffect(() => {
    fetch("https://travely2021.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleAddPackage = (e) => {
    const name = package_Ref.current.value;
    const price = priceRef.current.value;
    const Location = LocationRef.current.value;
    const desc = DescriptionRef.current.value;
    const img = imgRef.current.value;
    const id = u_idRef.current.value;

    const newPackage = { name, price, Location, desc, img, id };

    fetch("http://localhost:5000/tours", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("New Package Added.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center">Dashboard</h1>
      <div className="row">
        <div className="col-lg-6 col-12">
          <h3 className="text-center">All orders</h3>
          {order.map((o) => (
            <div>
              <h3>Email id:{o.email}</h3>
              <h5>Package Name:{o.services}</h5>
              <h5>Booked Date:{o.date}</h5>
              <h5>Address:{o.address}</h5>
            </div>
          ))}
        </div>
        <div className="col-lg-6 col-12">
          <h3>Add a Service</h3>
          <Form onSubmit={handleAddPackage}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Package Name</Form.Label>
              <Form.Control type="text" placeholder="" ref={package_Ref} />
              <Form.Text className="text-muted">
                Put your package title here
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="" ref={priceRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" ref={LocationRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder={"Enter Description "}
                ref={DescriptionRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Link</Form.Label>
              <Form.Control
                type="text"
                placeholder={"Enter Link here"}
                ref={imgRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Unique ID number</Form.Label>
              <Form.Control
                type="number"
                placeholder={"Enter your Unique ID number here "}
                ref={u_idRef}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
