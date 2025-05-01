import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = function () {
    // Form validation
    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }
    
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((res) => {
        console.log(res.data);
        if (res.data.email) {
          navigate("/login");
        } else if (res.data.err) {
          setError(res.data.err);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Registration failed. Please try again.");
      });
  };

  return (
    <div className="main">
      <section className="signup">
        <div className="signup-container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <div className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <div className="form-group form-button">
                  <button
                    style={{ border: "transparent" }}
                    className="form-submit"
                    onClick={register}
                  >
                    Register
                  </button>
                </div>
                
                <div className="form-group">
                  <p>
                    Already have an account? <Link to="/login">Login here</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="signup-image">
              <img src="auth/images/signup-image.jpg" alt="sign up image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;