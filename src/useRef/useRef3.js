import React, { useRef, useState } from "react";

const UseRef3 = () => {
  const [email, setEmail] = useState("");
  const inputRef = useRef();

  const OnInputChange = (e) => {
    setEmail(e.target.value);
  };

  const RemoveValue = () => {
    inputRef.current.value = "";
  };

  const SetValue = () => {
    inputRef.current.value = "erdecode@gmail.com";
  };

  const CheckEmailStateValue = () => {
    console.log({ email, ref: inputRef.current.value });
  };

  return (
    <div className="functional-app">
      <h1>Useref for prev value</h1>
      <input
        ref={inputRef}
        value={email}
        onChange={OnInputChange}
        style={{ padding: 16, fontSize: 32, marginBottom: 16 }}
      />
      <br />
      <button onClick={RemoveValue}>Remove value</button>
      <button onClick={SetValue}>Set Email</button>
      <button onClick={CheckEmailStateValue}>Check Email Value</button>
    </div>
  );
};

export default UseRef3;
