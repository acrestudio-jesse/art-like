import { useState } from "react";
import type { SetStateAction } from "react";

const useValidInput = (validator: (value: string) => boolean) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid: boolean = validator(value);
  const isNotValid: boolean = !isValid && touched;

  const changeValueHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  const blurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  const valueStyles = isNotValid? "text-orange rounded-xl bg-yellow px-4 py-1 placeholder-black outline-none ring-orange ring-4":"text-black rounded-xl bg-yellow px-4 py-1 placeholder-black outline-none"
 

  return { value, changeValueHandler, blurHandler, isValid, isNotValid, reset, valueStyles};
};

export default useValidInput;
