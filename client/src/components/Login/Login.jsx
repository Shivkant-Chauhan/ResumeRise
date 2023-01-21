import { React, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    Axios.post("http://localhost:4000/api/v1/users/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/resume");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <div className="login">
      <h3>
        Resu<span className="blue">me</span>Rise
      </h3>

      <h2>Login here</h2>
      <form>
        <div>
          <label>Username</label>
          <input
            type="email"
            placeholder="e-mail"
            name="email"
            value={email}
            required
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
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn-primary" onClick={login}>
          Login
        </button>
        <div className="msg">
          <p>Don't have an Account?</p>
          <Link exact="true" to="/Signup" className="msg-link">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
