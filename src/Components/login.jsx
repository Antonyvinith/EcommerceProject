import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom"; // Import Router components
import "./login.css";
import BackgroundImage from "./image.jpg";
import ShoppingCart from "../../Testing Bootstrap/Product_list/Product_list";
import axios from "axios";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputUsername == "antony" && inputPassword == "antony123") {
      navigate("/new-page");
    }
    try {
      const response = await axios.post("/api/login", {
        username: inputUsername,
        password: inputPassword,
      });
      if (response.data.success) {
        console.log("Successful");
        navigate("/new-page");
      } else {
        alert("Incorrect username or password.");
      }
    } catch (error) {
      // console.error("Error:", error);
      //alert("An error occurred while logging in.");
    }
  };
  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="h4 mb-2 text-center">Sign In</div>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Antony Vinith
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/new-page" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
