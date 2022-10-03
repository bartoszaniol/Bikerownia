import { useState } from "react";
import { Link } from 'react-router-dom'

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [isLogging, setIsLogging] = useState(true);

  const registerHandler = () => {
    setIsLogging(false);
  };

  const logInHandler = () => {
    setIsLogging(true);
  };

  return (
    <>
      <form className={styles.form}>
        {isLogging && <div>Rowerownia</div>}
        {!isLogging && (
          <div className={styles.avatar}>
            <div className={styles.avatarContent}>+</div>
          </div>
        )}
        {!isLogging && (
          <div>
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" />
          </div>
        )}
        {!isLogging && (
          <div>
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" />
          </div>
        )}
        <div className={`${isLogging ? styles.first : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        {isLogging && <Link to='/'>Log In</Link>}
        {!isLogging && (
          <section className={styles.terms}>
            <input type="checkbox" id="terms"></input>
            <label htmlFor="terms"> Terms</label>
          </section>
        )}
        {!isLogging && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLogging(true);
            }}
          >
            Register
          </button>
        )}
        {isLogging && (
          <p>
            Don't have an account?
            <span onClick={registerHandler}> Register one</span>
          </p>
        )}
        {!isLogging && (
          <p>
            Already have an account?
            <span onClick={logInHandler}> Log in</span>
          </p>
        )}
        
      </form>
    </>
  );
};

export default LoginForm;
