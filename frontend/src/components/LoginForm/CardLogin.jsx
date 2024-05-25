import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import heroSection from "../../assets/images/heroSection.jpg";
import "./CardLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CardLogin() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  async function login(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/login", { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        if (res.message) {
          alert("Error Login");
        } else {
          navigate("/AddProduct");
        }
      })
      .catch(() => {
        alert("Error Login");
      })
      .finally(() => {});
  }

  return (
    <div className="BodyLogin">
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${heroSection})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Noir avec une opacité de 0.5
          }}
        ></div>
        <div className={`containerLogin ${isSignUp ? "active" : ""}`}>
          {/* form-container sign-up */}
          <div className="form-container sign-up">
            <form>
              <h1>Create an account</h1>
              <p>Enter your email beelow to create your account</p>
              <div className="social-icons">
                <a href="#" className="icon">
                  <GoogleIcon />
                </a>
                <a href="#" className="icon">
                  <FacebookIcon />
                </a>
                <a href="#" className="icon">
                  <LinkedInIcon />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          {/* form-container sign-in */}
          <div className="form-container sign-in">
            <form onSubmit={login}>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <GoogleIcon />
                </a>
                <a href="#" className="icon">
                  <FacebookIcon />
                </a>
                <a href="#" className="icon">
                  <LinkedInIcon />
                </a>
              </div>
              <span>or use your email password</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#">Forget Your Password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>

                <button
                  className={`toggleButton ${isSignUp ? "" : "active"}`}
                  onClick={toggleForm}
                >
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className={`toggleButton ${isSignUp ? "active" : ""}`}
                  onClick={toggleForm}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogin;
