import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
  return (
    <div className="form-container">
      <h1>Registration</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
