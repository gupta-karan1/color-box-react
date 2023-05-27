import colorNames from "colornames";
import { useRef } from "react";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  const inputRef = useRef(null);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name: </label>
      <input
        type="text"
        autoFocus
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
        required
        ref={inputRef}
        placeholder="Enter Color Name"
      />
      <button
        type="button"
        onClick={() => {
          setIsDarkText(!isDarkText);
          inputRef.current.focus();
        }}
      >
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
