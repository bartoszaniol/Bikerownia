import { useState, useContext } from "react";
import { AuthContext } from "../../context/auth-context";

import styles from "./LoginForm.module.css";
import Input from "../../UI/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../UI/util/validators";
import { useForm } from "../../hooks/use-form";

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [isLogging, setIsLogging] = useState(true);
  const [termsBool, setTermsBool] = useState(false);

  const registerUserHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "name",
          email: "email",
          password: "password",
          image: "Noice",
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const termsHandler = () => {
    setTermsBool((prevState) => !prevState);
  };

  const changeModeHanlder = () => {
    setIsLogging((prev) => !prev);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    auth.login();
  };

  return (
    <>
      <form className={styles.form}>
        {isLogging && <div className={styles.name}>Bikerownia</div>}
        {isLogging && (
          <div className={styles.title}>Don't ask what this is</div>
        )}
        {!isLogging && (
          <div className={styles.avatar}>
            <div className={styles.avatarContent}>+</div>
          </div>
        )}
        {!isLogging && (
          <Input
            id="name"
            type="name"
            label="Username"
            validators={[VALIDATOR_REQUIRE()]}
            errorText={"Enter a valid username"}
            onInput={inputHandler}
          />
        )}
        <div className={`${isLogging ? styles.first : ""}`}>
          <Input
            id="email"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText={"Enter a valid email"}
            onInput={inputHandler}
          />
        </div>
        <Input
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText={"Enter a valid password (min 5 char)"}
          onInput={inputHandler}
        />

        {isLogging && (
          <button
            disabled={
              !formState.inputs.email.isValid ||
              !formState.inputs.password.isValid
            }
            className={`${
              (!formState.inputs.email.isValid ||
                !formState.inputs.password.isValid) &&
              styles.disabled
            }`}
            onClick={loginHandler}
          >
            Log In
          </button>
        )}
        {!isLogging && (
          <section className={styles.terms}>
            <input type="checkbox" id="terms" onClick={termsHandler} />
            <label htmlFor="terms">Terms</label>
          </section>
        )}
        {!isLogging && (
          <button
            type="submit"
            className={`${
              (!formState.isValid || !termsBool) && styles.disabled
            }`}
            disabled={!formState.isValid || !termsBool}
            onClick={registerUserHandler}
          >
            Register
          </button>
        )}
        {isLogging && (
          <p>
            Don't have an account?
            <span onClick={changeModeHanlder}> Register one</span>
          </p>
        )}
        {!isLogging && (
          <p>
            Already have an account?
            <span onClick={changeModeHanlder}> Log in</span>
          </p>
        )}
      </form>
    </>
  );
};

export default LoginForm;
