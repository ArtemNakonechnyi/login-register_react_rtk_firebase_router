import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import styles from "../styles.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className={styles.home}>
      <h1>Welcome!!!</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
