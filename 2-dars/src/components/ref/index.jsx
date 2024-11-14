import { useRef, useState } from "react";
import style from "./style.module.css";
const Ref = () => {
  const inputRef = useRef(null);
  const focous = () => {
    inputRef.current.focus();
  };
  const telRef = useRef();
  const [value, setValue] = useState("");

  const change = (e) => {
    setValue(e);
    if (value.length >= 15) {
      telRef.current.focus();
    }
  };

  return (
    <div className={style.ref}>
      <button onClick={focous}>Focus</button>
      <br />
      <input ref={inputRef} type="text" />
      <br />
      <br />
      <div>
        <input
          value={value}
          onChange={(e) => change(e.target.value)}
          placeholder="Cart number"
          type="text"
        />
        <br />
        <br />
        <input ref={telRef} type="text" placeholder="tel" />
        <br />
      </div>
    </div>
  );
};

export default Ref;
