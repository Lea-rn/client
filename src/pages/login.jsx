import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = function (e) {
    e.preventDefault(); // Prévenir le comportement par défaut de soumission du formulaire
    console.log("working");
    
    // Validation du formulaire
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        console.log("Login response:", res.data);
        
        if (res.data.token) {
          // Stocker les données de l'utilisateur dans localStorage
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.id);
          localStorage.setItem("userName", res.data.name);
          localStorage.setItem("userEmail", res.data.email);
          
          // Rediriger vers la page d'accueil
          navigate("/home");
        } else if (res.data.msg === "wrong email or password !! ") {
          setError("Invalid email or password");
        } else {
          setError("Login failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        setError("Login failed. Please check your credentials.");
      });
  };

  return (
    <section className="sign-in">
      <div className="login-container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src="auth/images/signin-image.jpg" alt="sign up" />
            </figure>
            <Link to="/" className="signup-image-link">
              Create an account
            </Link>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Sign in</h2>
            
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {/* Utilisation du formulaire pour capter onSubmit */}
            <form className="register-form" id="login-form" onSubmit={login}>
              <div className="form-group">
                <label htmlFor="your_email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="your_email"
                  id="your_email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="your_pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="your_pass"
                  id="your_pass"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className="form-group form-button">
                <button type="submit">Login</button>
              </div>
            </form>

      
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
