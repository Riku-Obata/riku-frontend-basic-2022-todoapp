import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleChange = (e) => {};
  });

  return (
    <StyledInput>
      <input defaultValue={props.default} type="text" ref={inputRef} />
    </StyledInput>
  );
};
export default Input;
