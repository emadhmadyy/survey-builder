import "./style.css";
import Input from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { request } from "../../core/apicall";

const Register = () => {
  const checkUser = async () => {
    try {
      const response = await request({
        route: "/user/register",
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        }),
      });
      if (response.status == 200) {
        alert("Registered Successfully!");
        navigate("/");
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const isEmailValid = (value) => {
    // Simple email validation, you might want to use a library or regex for more complex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isPasswordStrong = (value) => {
    // Simple password strength check, you might want to implement more complex rules
    return value.length >= 8;
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
  const handleFnameChange = (newFname) => {
    setFirstName(newFname);
    setFirstNameError(newFname == "" ? "First name is required" : "");
  };
  const handleLnameChange = (newLname) => {
    setLastName(newLname);
    setLastNameError(newLname == "" ? "last name is required" : "");
  };

  const checkDataValidity = () => {
    // Validate and show error messages for empty fields
    if (first_name == "") {
      setFirstNameError("First name is required");
    } else if (last_name == "") {
      setLastNameError("Last name is required");
    } else if (email == "") {
      setEmailError("Email is required *");
    } else if (password == "") {
      setPasswordError("Password is required *");
    } else {
      checkUser();
    }
  };
  const handleRegister = () => {
    checkDataValidity();
  };

  return (
    <div className="register-screen">
      <h1 className="white-text title-style">ReplyRocket</h1>
      <div className="flex column login">
        <h2 className="white-text text-style">Register in ReplyRocket</h2>
        <div className="flex column align-right">
          <Input
            type="text"
            placeholder="first_name"
            value={first_name}
            onChange={handleFnameChange}
            error={firstNameError}
          />
          <Input
            type="text"
            placeholder="last_name"
            value={last_name}
            onChange={handleLnameChange}
            error={lastNameError}
          />
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
          onClick={handleRegister}
        >
          REGISTER
        </button>
        <p className="white-text text-style margin-top">
          have an account?{" "}
          <span className="clickable" onClick={goToLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
