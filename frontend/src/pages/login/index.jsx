import "./style.css";
import Input from "../../components/inputField";

const Login = () => {
  return (
    <div className="login-screen">
      <h1 className="white-text title-style">ReplyRocket</h1>
      <div className="flex column login">
        <h2 className="white-text text-style">Login to ReplyRocket</h2>
        <div className="flex column align-right">
          <Input type="text" placeholder="email" />
          <Input type="password" placeholder="password" />
        </div>
        <button className="btn-style clickable" type="submit">
          LOGIN
        </button>
        <p className="white-text text-style margin-top">
          Dont have an account? <span className="clickable">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
