import img1 from "./images/travely_logo.JPG";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Packages from "./components/Packages/Packages";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contact";
import useFirebase from "../src/hooks/useFirebase";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Placeorder from "./components/Placeorder/Placeorder";
import MyOrders from "./components/MyOrders/MyOrders";

function App() {
  const { user, logOut, signInUsingGoogle } = useFirebase();
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={img1}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{" "}
              Travely
            </Navbar.Brand>
          </Container>

          <Link
            style={{
              textDecoration: "none",
              color: "#F57408",
              marginRight: "15px",
            }}
            to="/home"
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#F57408",
              marginRight: "15px",
            }}
            to="/tours"
          >
            Tour Packages
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#F57408",
              marginRight: "15px",
            }}
            to="/about"
          >
            About
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#F57408",
              marginRight: "15px",
            }}
            to="/contacts"
          >
            Contact Us
          </Link>

          {user.email ? (
            <div>
              <Link
                style={{ textDecoration: "none", color: "#F57408" }}
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#F57408" }}
                to="/myorders"
              >
                My orders
              </Link>
              <button onClick={logOut}>log out</button>
            </div>
          ) : (
            <button onClick={signInUsingGoogle}> Login </button>
          )}
          {user.email && (
            <span style={{ color: "skyblue", marginRight: "5px" }}>
              User:{user.displayName}{" "}
            </span>
          )}
        </Navbar>

        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/tours/:serviceId">
              <Placeorder />
            </PrivateRoute>
            <Route path="/tours">
              <Packages />
            </Route>
            <Route path="/contacts">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
