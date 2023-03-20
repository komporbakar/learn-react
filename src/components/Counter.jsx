import { useState } from "react";
import Button from "./Button";

export default function Counter({ defaultValue }) {
  const [count, setCount] = useState(defaultValue);
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1 className="text-xxl flex items-center">{count}</h1>
      <div className="mt-5 flex items-center gap-2">
        <Button onClick={handleClick}>+ 1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}
        >
          + 3
        </Button>
      </div>
    </div>
  );
}
