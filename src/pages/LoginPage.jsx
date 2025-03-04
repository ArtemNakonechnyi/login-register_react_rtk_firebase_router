import { Link } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <Login />
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
