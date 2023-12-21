import "./style.css";
import Input from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { request } from "../../core/apicall";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const isEmailValid = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isPasswordStrong = (value) => {
    return value.length >= 7;
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
    setEmailError(() =>
      isEmailValid(newEmail) ? "" : "Invalid email address"
    );
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    setPasswordError(
      isPasswordStrong(newPassword)
        ? ""
        : "Password must be at least 8 characters long"
    );
  };

  const checkDataValidity = () => {
    setEmailError(email === "" ? "Email is required *" : "");
    setPasswordError(password === "" ? "Password is required *" : "");

    return (
      email !== "" &&
      password !== "" &&
      isEmailValid(email) &&
      isPasswordStrong(password)
    );
  };

  const checkUser = async () => {
    try {
      const isValid = checkDataValidity();

      if (isValid) {
        const response = await request({
          route: "/user/login",
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
        });

        // If request is successful, log the response
        localStorage.setItem("token", response.data.token);
        navigate("/surveys");
      }
    } catch (e) {
      // Handle error here
      alert(e.response.data.message);
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    checkUser();
  };
  return (
    <div className="login-screen">
      <h1 className="white-text title-style">ReplyRocket</h1>
      <div className="flex column login">
        <h2 className="white-text text-style">Login to ReplyRocket</h2>
        <div className="flex column align-right">
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
        </div>
        <button
          className="btn-style clickable"
          type="submit"
          onClick={handleLogin}
        >
          LOGIN
        </button>
        <p className="white-text text-style margin-top">
          Dont have an account?{" "}
          <span className="clickable" onClick={goToRegister}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
