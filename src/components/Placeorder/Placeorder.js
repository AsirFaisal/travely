import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const Placeorder = () => {
  const DateRef = useRef();
  const adrsRef = useRef();

  const { serviceId } = useParams();
  const [data, setData] = useState([]);
  const { user } = useFirebase();

  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const item = data.find((datas) => datas.id == serviceId);
  console.log(item);
  console.log(serviceId);
  console.log(data);
  const handleAddUser = (e) => {
    const name = user.name;
    const email = user.email;
    const services = item.name;
    const date = DateRef.current.value;
    const address = adrsRef.current.value;

    const newUser = { name, email, services, date, address };

    fetch("https://travely2021.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Booking Confirmed.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Confirm Your Booking</h2>
      <div className="row ms-5">
        <div className="col-12 col-lg-6">
          <Card style={{ width: "30rem" }}>
            <Card.Img className="img-fluid" variant="top" src={item?.img} />
            <Card.Body>
              <Card.Title>Tour name : {item?.name}</Card.Title>
              <Card.Text>Description:{item?.desc}</Card.Text>
              <Card.Text>Price : ${item?.price}</Card.Text>
              <Card.Text>Location :{item?.Location}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-lg-4  me-5 bg-light">
          <h2>Booking Form</h2>
          <Form onSubmit={handleAddUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.email}
                value={user.email}
                disabled="true"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={user.name}
                value={user.displayName}
                disabled="true"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Package Name</Form.Label>
              <Form.Control type="text" value={item?.name} disabled="true" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                ref={adrsRef}
                type="text"
                placeholder={"Enter address "}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                ref={DateRef}
                type="date"
                placeholder={"Enter booking date"}
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

export default Placeorder;
