import { useState } from "react";
import style from "./form.module.css";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 12000,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  //   const [currentsavings, changeCurrentSavings] = useState("");
  //   const [yearlyContribution, setYearlyContribution] = useState("");
  //   const [expectedReturn, setSetExpectedReturn] = useState("");
  //   const [duration, setDuration] = useState("");

  const [userInput, setUserInput] = useState(initialUserInput);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    props.calculate(userInput);
    console.log("formsubmit called");
  };

  const resetHandler = (event) => {
    //.
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form onSubmit={formSubmitHandler} className={`${style["form"]}`}>
      <div className={`${style["input-group"]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={`${style["input-group"]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
            value = {userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={`${style["actions"]}`}>
        <button
          onClick={resetHandler}
          type="reset"
          className={`${style["buttonAlt"]}`}
        >
          Reset
        </button>
        <button type="submit" className={`${style["buttonAlt"]}`}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
