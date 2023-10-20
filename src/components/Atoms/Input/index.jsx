import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = () => {
  const inputRef = useRef(null);

  return (
    <div className="inputColor">
      <input type="text" ref={inputRef} />
    </div>
  );
};
export default Input;
