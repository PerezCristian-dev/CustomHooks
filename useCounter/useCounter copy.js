import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    if (counter >= 50) return;
    setCounter(counter + value);
  };

  const decrease = (value = 1) => {
    if (counter <= 0) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrease,
    reset,
  };
};
