import { useReducer, useCallback } from "react";

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

export const useForm = (initialState, initialValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialState,
    isValid: initialValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", value, isValid, input: id });
  }, []);

  return [formState, inputHandler];
};
