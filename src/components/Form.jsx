import { useState } from "react";
import styles from "../styles.module.css";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.wrapper}>
      <div>
        <label htmlFor="#email">Your email</label>
        <br />
        <input
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>

      <div>
        <label htmlFor="password">Your password:</label>
        <br />
        <input
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
};

export default Form;
