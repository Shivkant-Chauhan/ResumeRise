import { React, useState } from "react";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    Axios.post("http://localhost:4000/api/v1/users/signup", {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  return (
    <div className="signup">
      <h3>
        Resu<span className="blue">me</span>Rise
      </h3>

      <h2>Create your account here</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="e-mail"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn-primary" onClick={signup}>
          Sign Up
        </button>
        <div className="msg">
          <p>Don't have an Account?</p>
          <Link exact="true" to="/Login" className="msg-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
