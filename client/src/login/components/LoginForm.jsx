import { useState, useCallback, useReducer } from "react";
import { Link } from "react-router-dom";

import styles from "./LoginForm.module.css";
import Input from "../../UI/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../UI/util/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const input in state.inputs) {
        if (input === action.input) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[input].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.input]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

const LoginForm = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
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
    isValid: false,
  });
  const [isLogging, setIsLogging] = useState(true);
  const [termsBool, setTermsBool] = useState(false);

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", value, isValid, input: id });
  }, []);

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

  const registerHandler = () => {
    setIsLogging(false);
    setTermsBool(false);
  };

  const loginHandler = () => {
    setIsLogging(true);
    setTermsBool(false);
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

        {isLogging && <Link to="/">Log In</Link>}
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
            <span onClick={registerHandler}> Register one</span>
          </p>
        )}
        {!isLogging && (
          <p>
            Already have an account?
            <span onClick={loginHandler}> Log in</span>
          </p>
        )}
      </form>
    </>
  );
};

export default LoginForm;
